const BitString = require('bitstring');

const splice_time = function(bitstr) {
  const ret = {};
  ret.time_specified_flag = bitstr.readbits(1);
  if (ret.time_specified_flag == 1) {
    ret.reserved = bitstr.readbits(6);
    ret.pts_time_one = bitstr.readbits(1);
    ret.pts_time = bitstr.readbits(32) / 90000.0;
  } else {
    ret.reserved = bitstr.readbits(7);
  }

  return ret;
};

const break_duration = function(bitstr) {
  const ret = {};

  ret.auto_return = bitstr.readbits(1);
  ret.reserved = bitstr.readbits(6);
  ret.duration_one = bitstr.readbits(1);
  ret.duration = bitstr.readbits(32) / 90000.0;

  return ret;
};

const decode = function(scte_b64) {
  const buf = Buffer.from(scte_b64, 'base64');

  const retObj = {};
  const bitstr = new BitString('', buf);

  retObj.byte_size = bitstr.size();

  bitstr.seek(0, BitString.SEEK_ABSOLUTE);

  retObj.table_id = bitstr.readbits(8);

  if (retObj.table_id != 252) {
    // 0xfc
    retObj.error = 'Invalid table_id.';
    return retObj;
  }

  retObj.section_syntax_indicator = bitstr.readbits(1);
  retObj.private_indicator = bitstr.readbits(1);
  retObj.reserved = bitstr.readbits(2);
  retObj.section_length = bitstr.readbits(12);

  if (retObj.section_length != retObj.byte_size - 3) {
    // 3 bytes are already read at the start
    retObj.error = 'Invalid section_length detected';
    return retObj;
  }

  let i;
  let j;

  retObj.protocol_version = bitstr.readbits(8);
  retObj.encrypted = bitstr.readbits(1);
  retObj.encryption_algorithm = bitstr.readbits(6);
  retObj.pts_adjustment = bitstr.readbits(33);

  retObj.cw_index = bitstr.readbits(8);

  retObj.tier = bitstr.readbits(12);
  retObj.splice_command_length = bitstr.readbits(12);
  retObj.splice_command_type = bitstr.readbits(8);

  if (retObj.splice_command_type === 5) {
    // splice insert
    retObj.splice_event_id = bitstr.readbits(32);
    retObj.splice_event_cancel_indicator = bitstr.readbits(1);
    retObj.splice_reserved = bitstr.readbits(7);
    if (retObj.splice_event_cancel_indicator == 0) {
      retObj.out_of_network_indicator = bitstr.readbits(1);
      retObj.program_splice_flag = bitstr.readbits(1);
      retObj.duration_flag = bitstr.readbits(1);
      retObj.splice_immediate_flag = bitstr.readbits(1);
      retObj.seci_reserved = bitstr.readbits(4);
      if (
        retObj.program_splice_flag === 1 &&
        retObj.splice_immediate_flag === 0
      ) {
        retObj.splice_time = splice_time(bitstr);
      }
      if (retObj.program_splice_flag === 0) {
        retObj.component_count = bitstr.readbits(8);
        for (i = 0; i < retObj.component_count; i++) {
          retObj.splice_flag = [];
          var x = {};
          x.component_tag = bitstr.readbits(8);
          x.splice_time = splice_time(bitstr);
          retObj.splice_flag.push(x);
        }
      }
      if (retObj.duration_flag == 1) {
        retObj.break_duration = break_duration(bitstr);
      }

      retObj.unique_program_id = bitstr.readbits(16);
      retObj.avail_num = bitstr.readbits(8);
      retObj.avail_expected = bitstr.readbits(8);
    }
  }

  if (retObj.splice_command_type == 0) {
    // console.log("null splice_command_type");
    return retObj;
  }

  if (retObj.splice_command_type == 4) {
    x.splice_count = bitstr.readbits(8);
    x.splice_details = [];
    for (i = 0; i < x.splice_count; i++) {
      const g = new Object();
      g.splice_event_id = bitstr.readbits(32);
      g.splice_event_cancel_indicator = bitstr.readbits(1);
      g.reserved = bitstr.readbits(7);
      if (g.splice_event_cancel_indicator == 0) {
        g.out_of_network_indicator = bitstr.readbits(1);
        g.program_splice_flag = bitstr.readbits(1);
        g.duration_flag = bitstr.readbits(1);
        g.reserved = bitstr.readbits(5);
        if (g.program_splice_flag == 1) {
          g.utc_splice_time = bitstr.readbits(32);
        }
        if (g.program_splice_flag == 0) {
          g.component_count = bitstr.readbits(8);
          g.components = [];
          for (j = 0; j < g.component_count; j++) {
            const k = new Object();
            k.component_tag = bitstr.readbits(8);
            k.utc_splice_time = bitstr.readbits(32);
            g.components.push(k);
          }
        }

        if (g.duration_flag) {
          g.break_duration = break_duration(bitstr);
        }

        g.unique_program_id = bitstr.readbits(32);
        g.avail_num = bitstr.readbits(8);
        g.avails_expected = bitstr.readbits(8);
      }
      x.splice_details.push(g);
    }
  }

  if (retObj.splice_command_type == 6) {
    retObj.splice_time = splice_time(bitstr);
  }

  if (retObj.splice_command_type == 7) {
    // TODO :  implement bandwidth_reservation()
    return retObj;
  }

  if (retObj.splice_command_type == 255) {
    // TODO : private_command();
    return retObj;
  }

  retObj.descriptor_loop_length = bitstr.readbits(16);
  retObj.descriptor = [];
  for (i = 0; i < retObj.descriptor_loop_length; i++) {
    var x = new Object();
    x.splice_descriptor_tag = bitstr.readbits(8);
    x.descriptor_length = bitstr.readbits(8);
    if (x.splice_descriptor_tag != 2) {
      const useless = bitstr.readbits(x.descriptor_length);
    } else {
      // first two fields are the same for all, and they are already read above
      // x.splice_descriptor_tag = bitstr.readbits(8);
      // x.descriptor_length = bitstr.readbits(8);
      x.identifier = bitstr.readbits(32);
      x.segmentation_event_id = bitstr.readbits(32);
      x.segmentation_event_cancel_indicator = bitstr.readbits(1);
      x.reserved = bitstr.readbits(7);

      if (x.segmentation_event_cancel_indicator == 0) {
        x.program_segmentation_flag = bitstr.readbits(1);
        x.segmentation_duration_flag = bitstr.readbits(1);
        x.delivery_not_restricted_flag = bitstr.readbits(1);

        if (x.delivery_not_restricted_flag == 0) {
          x.web_delivery_allowed_flag = bitstr.readbits(1);
          x.no_regional_blackout_flag = bitstr.readbits(1);
          x.archive_allowed_flag = bitstr.readbits(1);
          x.device_restrictions = bitstr.readbits(2);
        } else {
          x.reserved_2 = bitstr.readbits(5);
        }
        if (x.program_segmentation_flag == 0) {
          x.component_count = bitstr.readbits(8);
          x.components = [];
          for (j = 0; j < x.component_count; j++) {
            const y = new Object();
            y.component_tag = bitstr.readbits(8);
            y.reserved = bitstr.readbits(7);
            y.pts_offset = bitstr.readbits(33);
            x.components.push(y);
          }
        }

        if (x.segmentation_duration_flag == 1) {
          x.segmentation_duration = bitstr.readbits(40);
        }
        x.segmentation_upid_type = bitstr.readbits(8);
        x.segmentation_upid_length = bitstr.readbits(8);
        // TODO :  segmentation_upid(); :: check page 54

        x.segmentation_type_id = bitstr.readbits(8);
        x.segment_num = bitstr.readbits(8);
        x.segments_expected = bitstr.readbits(8);

        if (x.segmentation_type_id == 52 || x.segmentation_type_id == 54) {
          // 0x34 => 52, 0x36 => 54
          x.sub_segment_num = bitstr.readbits(8);
          x.sub_segments_expected = bitstr.readbits(8);
        }
      }
      retObj.descriptor.push(x);
    }
  }

  if (retObj.encrypted != 0) {
    // do something about the alignment stuffing
  }

  if (retObj.encrypted == 1) {
    retObj.e_crc32 = bitstr.readbits(32);
  }

  retObj.crc32 = bitstr.readbits(32);

  return retObj;
};

/*
var parse = function(sctecode, callback) {

};
*/

// module.exports.parse = parse;
module.exports.decode = decode;
