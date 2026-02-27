import './Creative.css';

// Add your posts here — just fill in title, date, description, and optionally a link
const posts = [
  {
    id: 1,
    title: "Post title goes here",
    date: "Month Year",
    description: "A short description of what this post is about. Replace this with a sentence or two about the piece.",
    link: "",
    linkLabel: "Read"
  }
];

const Creative = () => {
  return (
    <main className="creative-page">
      <div className="creative-inner">

        <div className="creative-header">
          <h1 className="creative-title">creative works</h1>
          <p className="creative-subtitle">essays, blog posts, and whatever else ends up here</p>
        </div>

        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-row">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
              </div>
              <div className="post-body">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-desc">{post.description}</p>
                {post.link && (
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="post-link">
                    {post.linkLabel} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Creative;