const BitString = require('bitstring');

const spliceTime = bitstr => {
  let reserved = {};
  const timeSpecifiedFlag = bitstr.readbits(1);
  if (timeSpecifiedFlag === 1) {
    reserved = bitstr.readbits(6);
  } else {
    reserved = bitstr.readbits(7);
  }

  return { reserved };
};

const breakDuration = bitstr => {
  const reserved = bitstr.readbits(6);
  const duration = bitstr.readbits(32) / 90000.0;

  return { reserved, duration };
};

const decode = scteB64 => {
  const buf = Buffer.from(scteB64, 'base64');

  const retObj = {};
  const bitstr = new BitString('', buf);

  retObj.byteSize = bitstr.size();

  bitstr.seek(0, BitString.SEEK_ABSOLUTE);

  retObj.tableId = bitstr.readbits(8);

  if (retObj.tableId !== 252) {
    // 0xfc
    retObj.error = 'Invalid tableId.';
    return retObj;
  }

  retObj.sectionSyntaxIndicator = bitstr.readbits(1);
  retObj.privateIndicator = bitstr.readbits(1);
  retObj.reserved = bitstr.readbits(2);
  retObj.sectionLength = bitstr.readbits(12);

  if (retObj.sectionLength !== retObj.byteSize - 3) {
    // 3 bytes are already read at the start
    retObj.error = 'Invalid sectionLength detected';
    return retObj;
  }

  let i;
  let j;

  retObj.protocolVersion = bitstr.readbits(8);
  retObj.encrypted = bitstr.readbits(1);
  retObj.encryptionAlgorithm = bitstr.readbits(6);
  retObj.ptsAdjustment = bitstr.readbits(33);

  retObj.cwIndex = bitstr.readbits(8);

  retObj.tier = bitstr.readbits(12);
  retObj.spliceCommandLength = bitstr.readbits(12);
  retObj.spliceCommandType = bitstr.readbits(8);

  if (retObj.spliceCommandType === 5) {
    // splice insert
    retObj.spliceEventId = bitstr.readbits(32);
    retObj.spliceEventCancelIndicator = bitstr.readbits(1);
    retObj.spliceReserved = bitstr.readbits(7);
    if (retObj.spliceEventCancelIndicator === 0) {
      retObj.outOfNetworkIndicator = bitstr.readbits(1);
      retObj.programSpliceFlag = bitstr.readbits(1);
      retObj.durationFlag = bitstr.readbits(1);
      retObj.spliceImmediateFlag = bitstr.readbits(1);
      retObj.seciReserved = bitstr.readbits(4);
      if (retObj.programSpliceFlag === 1 && retObj.spliceImmediateFlag === 0) {
        retObj.spliceTime = spliceTime(bitstr);
      }
      if (retObj.programSpliceFlag === 0) {
        retObj.componentCount = bitstr.readbits(8);
        for (i = 0; i < retObj.componentCount; i++) {
          retObj.spliceFlag = [];
          const x = {};
          x.componentTag = bitstr.readbits(8);
          x.spliceTime = spliceTime(bitstr);
          retObj.spliceFlag.push(x);
        }
      }
      if (retObj.durationFlag === 1) {
        retObj.breakDuration = breakDuration(bitstr);
      }

      retObj.uniqueProgramId = bitstr.readbits(16);
      retObj.availNum = bitstr.readbits(8);
      retObj.availExpected = bitstr.readbits(8);
    }
  }

  if (retObj.spliceCommandType === 0) {
    // console.log("null spliceCommandType");
    return retObj;
  }

  if (retObj.spliceCommandType === 4) {
    x.spliceCount = bitstr.readbits(8);
    x.spliceDetails = [];
    for (i = 0; i < x.spliceCount; i++) {
      const g = {};
      g.spliceEventId = bitstr.readbits(32);
      g.spliceEventCancelIndicator = bitstr.readbits(1);
      g.reserved = bitstr.readbits(7);
      if (g.spliceEventCancelIndicator === 0) {
        g.outOfNetworkIndicator = bitstr.readbits(1);
        g.programSpliceFlag = bitstr.readbits(1);
        g.durationFlag = bitstr.readbits(1);
        g.reserved = bitstr.readbits(5);
        if (g.programSpliceFlag === 1) {
          g.utcSpliceTime = bitstr.readbits(32);
        }
        if (g.programSpliceFlag === 0) {
          g.componentCount = bitstr.readbits(8);
          g.components = [];
          for (j = 0; j < g.componentCount; j++) {
            const k = {};
            k.componentTag = bitstr.readbits(8);
            k.utcSpliceTime = bitstr.readbits(32);
            g.components.push(k);
          }
        }

        if (g.durationFlag) {
          g.breakDuration = breakDuration(bitstr);
        }

        g.uniqueProgramId = bitstr.readbits(32);
        g.availNum = bitstr.readbits(8);
        g.availsExpected = bitstr.readbits(8);
      }
      x.spliceDetails.push(g);
    }
  }

  if (retObj.spliceCommandType === 6) {
    retObj.spliceTime = spliceTime(bitstr);
  }

  if (retObj.spliceCommandType === 7) {
    // TODO :  implement bandwidthReservation()
    return retObj;
  }

  if (retObj.spliceCommandType === 255) {
    // TODO : privateCommand();
    return retObj;
  }

  retObj.descriptorLoopLength = bitstr.readbits(16);
  retObj.descriptor = [];
  for (i = 0; i < retObj.descriptorLoopLength; i++) {
    const x = {};
    x.spliceDescriptorTag = bitstr.readbits(8);
    x.descriptorLength = bitstr.readbits(8);
    if (x.spliceDescriptorTag !== 2) {
      const useless = bitstr.readbits(x.descriptorLength);
    } else {
      // first two fields are the same for all, and they are already read above
      // x.spliceDescriptorTag = bitstr.readbits(8);
      // x.descriptorLength = bitstr.readbits(8);
      x.identifier = bitstr.readbits(32);
      x.segmentationEventId = bitstr.readbits(32);
      x.segmentationEventCancelIndicator = bitstr.readbits(1);
      x.reserved = bitstr.readbits(7);

      if (x.segmentationEventCancelIndicator === 0) {
        x.programSegmentationFlag = bitstr.readbits(1);
        x.segmentationDurationFlag = bitstr.readbits(1);
        x.deliveryNotRestrictedFlag = bitstr.readbits(1);

        if (x.deliveryNotRestrictedFlag === 0) {
          x.webDeliveryAllowedFlag = bitstr.readbits(1);
          x.noRegionalBlackoutFlag = bitstr.readbits(1);
          x.archiveAllowedFlag = bitstr.readbits(1);
          x.deviceRestrictions = bitstr.readbits(2);
        } else {
          x.reserved2 = bitstr.readbits(5);
        }
        if (x.programSegmentationFlag === 0) {
          x.componentCount = bitstr.readbits(8);
          x.components = [];
          for (j = 0; j < x.componentCount; j++) {
            const y = {};
            y.componentTag = bitstr.readbits(8);
            y.reserved = bitstr.readbits(7);
            y.ptsOffset = bitstr.readbits(33);
            x.components.push(y);
          }
        }

        if (x.segmentationDurationFlag === 1) {
          x.segmentationDuration = bitstr.readbits(40);
        }
        x.segmentationUpidType = bitstr.readbits(8);
        x.segmentationUpidLength = bitstr.readbits(8);
        // TODO :  segmentationUpid(); :: check page 54

        x.segmentationTypeId = bitstr.readbits(8);
        x.segmentNum = bitstr.readbits(8);
        x.segmentsExpected = bitstr.readbits(8);

        if (x.segmentationTypeId === 52 || x.segmentationTypeId === 54) {
          // 0x34 => 52, 0x36 => 54
          x.subSegmentNum = bitstr.readbits(8);
          x.subSegmentsExpected = bitstr.readbits(8);
        }
      }
      retObj.descriptor.push(x);
    }
  }

  if (retObj.encrypted === 1) {
    retObj.eCrc32 = bitstr.readbits(32);
  }

  retObj.crc32 = bitstr.readbits(32);

  return retObj;
};

// module.exports.parse = parse;
module.exports.decode = decode;
