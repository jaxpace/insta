import React from 'react';
import publicUrl from 'utils/publicUrl';
import css from './Home.module.css'

let post = {
  user:{
    id:"judy",
    photo:"/assets/user1.png",
  },
  post:{
    id:"post-1",
    userId:"judy",
    photo:"/assets/post1.png",
    desc:"#zootopia #excited",
    datetime: "2020-02-09T22:45:28Z",
  
  },
  links: {
    self: true,
    count:1
  },
  comments:[
    {
      userId:"nick",
      text:"Welcome to Zootopia!"
    },
    {
        userId:"judy",
        text:"Thanks!😁Looking forward to meeting you!"
    }
  ]
}

function Home() {
  return (
  <div>
    <div className={css.margin}>
    <img className={css.profile} src= {publicUrl(post.user.photo)} />
      <div className ={css.profname}>
      <b> {post.user.id} </b>
      </div>
    </div>
   <img className={css.postphoto} src= {publicUrl(post.post.photo)} /> 
   <br></br>
    <div className={css.bottomsect} >
      <img src={publicUrl("/assets/like.svg")} />
      <div className={css.comlogo}>
      <img src={publicUrl("/assets/comment.svg")} />
      </div>
   </div>
   <br></br>
   <div className={css.engagement}>
      <div className={css.likes}>
      <b> {post.links.count} likes </b>
      </div>
      <br></br>
      <div className={css.username}>
        <b> {post.post.userId}</b>
        <div className={css.caption}>
          {post.post.desc}
        </div>
      </div>
      <br></br>
      <div className={css.comments}>
        <b>{post.comments[0].userId}</b>
        <div className={css.written}>
        {post.comments[0].text}
        </div>
      </div>

      </div>
  
  
  
</div>
);
}

export default Home;
