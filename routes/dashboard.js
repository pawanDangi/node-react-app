"use strict";
import express from 'express';
const router = express.Router();
import {getDashboardGraphController, getDashboardOverviewController} from '../controllers/dashboard';

router.get('/graph', getDashboardGraphController);
router.get('/overview', getDashboardOverviewController);

export default router;