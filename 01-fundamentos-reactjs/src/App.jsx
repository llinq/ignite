import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post
        author="João Costa"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio soluta, facilis dolorum dolorem necessitatibus consequuntur quo excepturi consequatur ullam, harum aspernatur cum in ex voluptatem itaque corrupti exercitationem, labore totam!"
      />
      <Post
        author="Cassio Henrique"
        content="Um novo post muito legal"
      />
    </div>
  )
}