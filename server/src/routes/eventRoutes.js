"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventsController_1 = require("../controllers/eventsController");
const router = (0, express_1.Router)();
router.get('/next', eventsController_1.getNextEvent);
exports.default = router;
//# sourceMappingURL=eventRoutes.js.map