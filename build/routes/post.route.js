"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var post_controller_1 = require("../controllers/post.controller");
var PostRoute = /** @class */ (function () {
    function PostRoute() {
    }
    PostRoute.prototype.createPost = function (app) {
        app.post('/post', post_controller_1.postController.createPost);
    };
    PostRoute.prototype.viewPost = function (app) {
        app.get('/post', post_controller_1.postController.viewPost);
    };
    PostRoute.prototype.viewAllPost = function (app) {
        app.get('/viewallpost', post_controller_1.postController.viewAllPost);
    };
    PostRoute.prototype.viewPostById = function (app) {
        app.post('/viewpostbyid', post_controller_1.postController.ViewPostById);
    };
    // postImageUpload(app: Express){
    //     app.post('/postupload', postController.postImageUpload);
    // }
    PostRoute.prototype.postRoute = function (app) {
        this.createPost(app);
        this.viewPost(app);
        this.viewAllPost(app);
        this.viewPostById(app);
        // this.postImageUpload(app);
    };
    return PostRoute;
}());
exports.default = PostRoute;
//# sourceMappingURL=post.route.js.map