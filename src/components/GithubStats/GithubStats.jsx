import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaStar, FaCodeBranch, FaBook } from 'react-icons/fa';
import './GithubStats.css';

export default function GithubStats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  // Using real GitHub username if available, or fallback
  const username = 'abdulazeesshaik'; 

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const user = await userRes.json();
          const repos = await reposRes.json();
          
          let totalStars = 0;
          let totalForks = 0;
          
          repos.forEach(repo => {
            totalStars += repo.stargazers_count;
            totalForks += repo.forks_count;
          });

          setStats({
            repos: user.public_repos,
            followers: user.followers,
            stars: totalStars,
            forks: totalForks,
          });
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="section github-stats" ref={ref}>
      <div className="container">
        <div className={`github-header ${inView ? 'animate-in' : ''}`}>
          <FaGithub className="github-icon-large" />
          <h2 className="section-title">
            <span className="gradient-text">GitHub</span> Statistics
          </h2>
          <p className="section-subtitle">Real-time metrics from my GitHub profile</p>
        </div>

        <div className={`stats-grid ${inView && !loading && stats ? 'animate-in' : ''}`}>
          {loading ? (
            <div className="loader"></div>
          ) : stats ? (
            <>
              <div className="stat-card">
                <FaBook className="stat-icon" />
                <h3 className="stat-value">{stats.repos}</h3>
                <p className="stat-label">Public Repos</p>
              </div>
              <div className="stat-card">
                <FaStar className="stat-icon" />
                <h3 className="stat-value">{stats.stars}</h3>
                <p className="stat-label">Total Stars</p>
              </div>
              <div className="stat-card">
                <FaCodeBranch className="stat-icon" />
                <h3 className="stat-value">{stats.forks}</h3>
                <p className="stat-label">Total Forks</p>
              </div>
              <div className="stat-card">
                <FaGithub className="stat-icon" />
                <h3 className="stat-value">{stats.followers}</h3>
                <p className="stat-label">Followers</p>
              </div>
            </>
          ) : (
            <p className="error-text">Failed to load statistics.</p>
          )}
        </div>
        
        {/* Simple Contribution Graph Placeholder or Image from external service */}
        <div className={`contributions-wrapper ${inView ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
           <img 
              src={`https://ghchart.rshah.org/6366f1/${username}`} 
              alt="GitHub Contribution Chart" 
              className="contribution-chart"
           />
        </div>
      </div>
    </section>
  );
}
