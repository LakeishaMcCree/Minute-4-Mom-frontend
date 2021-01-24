import React from 'react' 


const PostShow = (props) => {

console.log(props) 

let post = props.posts[props.match.params.id - 1]
console.log(post)

return (
    <li>
      {post ? post.title :null} - {post ? post.author :null}
    </li>
)



}

export default PostShow