import { Component, Input, Output, EventEmitter } from '@angular/core';
var TableComponent = (function () {
    function TableComponent() {
        this.pageSize = [10, 25, 50, 100];
        this.rotate = true;
        this.ellipses = false;
        this.boundaryLinks = true;
        this.onPageChange = new EventEmitter();
        this.onSizeChange = new EventEmitter();
        this.onSortChange = new EventEmitter();
    }
    TableComponent.prototype.pageChange = function (page) {
        this.page = page;
        this.onPageChange.emit(page);
    };
    TableComponent.prototype.sizeChange = function (size) {
        this.perPage = size;
        this.onSizeChange.emit(size);
    };
    TableComponent.prototype.sortChange = function (columnType) {
        this.onSortChange.emit(columnType);
    };
    return TableComponent;
}());
export { TableComponent };
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'ksf-table',
                template: "\n            <style>\n                th.sorting_ss_asc {\n                    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQjM4MkY2QzVGRUYwRTJDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkFEQzYxNjIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkFEQzYxNTIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z5ABTAAAAI5JREFUeNpi/P//PwO1ABMDFQELIQXVjfe4gFQbEJe11iv9otRl2UCcBcSphBQy4gszoKu0gNROIJYB4jtA7AF03V2SXQY0iBFIFUMNAgEVIM6DipPsTQcgDkQTSwRia5IMA9rOC6RqgVgQTQokXgOUZyfFZSFQF/zAgh2BOIjkCBjQRDtq2Khh9DAMIMAAT9AmNBDSXegAAAAASUVORK5CYII=\") no-repeat center right;\n                    cursor: pointer;\n                }\n\n                th.sorting_ss_desc {\n                    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQjM4MkY2QzVGRUYwRTJDNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkFEQzYxQTIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkFEQzYxOTIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFCMzgyRjZDNUZFRjBFMkM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1fsfwAAAAJdJREFUeNpi/P//PwO1ABMDFcGoYaOG0cMwFmyC1Y33IoHUAiD+h8MBGa31SvOJddk6IN4PxBxY8FEgXkO0N4G2/gRSLUD8GU3qPRA3A+U/kxpmIBege2U9EB/ApYERX6kBDDtlILUDiFWA+AkQuwNddY2s2ARqvAukJgDxbyCehM8gnLGJBmYDsSoQTyWkkHHQFo4AAQYAAA0piq4hbqwAAAAASUVORK5CYII=\") no-repeat center right;\n                    cursor: pointer;\n                }\n\n                th.sorting_ss {\n                    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDMDM5NjkyMkMxMTFFMUExRjFBREFENUIyQTUzOEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDMDM5NkEyMkMxMTFFMUExRjFBREFENUIyQTUzOEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNEMwMzk2NzIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNEMwMzk2ODIyQzExMUUxQTFGMUFEQUQ1QjJBNTM4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm8NGvcAAADkSURBVHjaYvz//z8DtQATAxUBCzbBu3fvInO5gLgNiMuA+BdMUFlZmSyXZQNxFhCnUupNLSDOA2JWIC4AOYhcwxiBuBiIZaB8FajBjOQY5gDEgWhiiUBsTaphvEBcC8SCWMRrgJidFMNCoC74gQU7AnEQ1nChZqLFlc4igdQCIP6HwzcZwHQ2n1hvrgPi/UDMgQUfBeI1pITZTyBuAeLPaOLvgbgZizjBpAFyAbpX1gPxAXLSGShmJgHxHSj/CRD3QsXJyk6gHD8BiH9DDb5GcmyigdlArArEUwkpZBy0hSNAgAEA5Ho0sMdEmU8AAAAASUVORK5CYII=\") no-repeat center right;\n                    cursor: pointer;\n                }\n            </style>\n\n            <div class=\"table-responsive\">\n\n                <table class=\"table table-striped table-bordered table-hover\">\n                <thead>\n                        <tr>\n                            <th *ngFor=\"let column of columns\" class=\"{{column.class}}\" (click)=\"sortChange(column)\">\n                                {{column.title}}\n                            </th>\n                        </tr>\n                </thead>\n                    <ng-content></ng-content>\n                </table>\n            \n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-lg-6\">\n\n                    <ngb-pagination \n                        [(page)]=\"page\" \n                        [(pageSize)]=\"perPage\"\n                        [(collectionSize)]=\"collectionSize\" \n                        [(maxSize)]=\"maxSize\" \n                        [rotate]=\"rotate\" \n                        [ellipses]=\"ellipses\" \n                        [boundaryLinks]=\"boundaryLinks\"\n                        (pageChange)=\"pageChange($event)\"></ngb-pagination>\n                </div>\n\n                <div class=\"col-lg-6\" style=\"text-align: right;\">\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"Itens por p\u00E1gina\">\n                        <button *ngFor=\"let size of pageSize\" [ngClass]=\"{'active': size == perPage}\"\n                            (click)=\"sizeChange(size)\" type=\"button\" class=\"btn btn-secondary\">\n                            {{size}}\n                        </button>\n                    </div>           \n                </div>\n\n            </div>\n    "
            },] },
];
/** @nocollapse */
TableComponent.ctorParameters = function () { return []; };
TableComponent.propDecorators = {
    'collectionSize': [{ type: Input },],
    'page': [{ type: Input },],
    'perPage': [{ type: Input },],
    'maxSize': [{ type: Input },],
    'columns': [{ type: Input },],
    'rotate': [{ type: Input },],
    'ellipses': [{ type: Input },],
    'boundaryLinks': [{ type: Input },],
    'onPageChange': [{ type: Output },],
    'onSizeChange': [{ type: Output },],
    'onSortChange': [{ type: Output },],
};
//# sourceMappingURL=table.component.js.map