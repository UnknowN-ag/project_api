
import { Express } from 'express';
import {postController} from '../controllers/post.controller';

export default class PostRoute{
    createPost(app: Express){
        app.post('/post', postController.createPost);
    }
    viewPost(app: Express){
        app.get('/post', postController.viewPost);
    }
    viewAllPost(app: Express){
        app.get('/viewallpost', postController.viewAllPost);
    }
    viewPostById(app: Express){
        app.post('/viewpostbyid', postController.ViewPostById);
    }
    // postImageUpload(app: Express){
    //     app.post('/postupload', postController.postImageUpload);
    // }

    postRoute(app:Express){
        this.createPost(app);
        this.viewPost(app);
        this.viewAllPost(app);
        this.viewPostById(app);
        // this.postImageUpload(app);
    }
}
