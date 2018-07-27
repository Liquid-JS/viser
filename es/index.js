import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Layouts, registerEdge, registerGuide, registerNode, Util } from 'viser-graph';
import { Edge, Graph, Node, Zoom } from './components/index';
var ViserGraphModule = (function () {
    function ViserGraphModule() {
    }
    ViserGraphModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        Graph,
                        Zoom,
                        Node,
                        Edge,
                    ],
                    exports: [
                        Graph,
                        Zoom,
                        Node,
                        Edge,
                    ],
                },] },
    ];
    return ViserGraphModule;
}());
export { ViserGraphModule };
export { registerNode, registerEdge, registerGuide, Layouts, Util, };
//# sourceMappingURL=index.js.map