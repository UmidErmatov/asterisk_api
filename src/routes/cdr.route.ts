import { Router } from 'express';
import {
    getCDRs,
    // getCDRById 
} from '../controllers/cdr.controller';

const cdrRouter = Router();

cdrRouter.route("/")
    .get(getCDRs)

// router.route("/:cdrId")
//     .get(getCDRById)

export default cdrRouter;