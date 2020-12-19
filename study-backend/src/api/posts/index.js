import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list); //글 읽기 post.ctrl.js의 const list
posts.get('/:id', postsCtrl.read); //특정글 읽기
posts.post('/', postsCtrl.write); //글 작성
posts.patch('/:id', postsCtrl.update); //특정 글에 대해 수정
posts.delete('/:id', postsCtrl.remove); //특정 글에 대해 삭제

export default posts;
