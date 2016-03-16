import evaluation = require( './evaluation' ) ;
import pnode = require('./pnode') ;
import vms = require('./vms') ;

module evaluationManager {

    import Evaluation = evaluation.Evaluation;
    import PNode = pnode.PNode;
    import VMS = vms.VMS;

    export class EvaluationManager {

        private _vms : VMS;

        PLAAY(root : PNode) : VMS {
            var e = new Evaluation(root);
            this._vms = new VMS(e);
            return this._vms;
        }

        next() : VMS {
            this._vms.advance();
            return this._vms;
        }

    }
}

export = evaluationManager ;