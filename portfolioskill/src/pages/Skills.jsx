import './Skills.css';

const skills = [
  { name: 'C', img: '/icons/c.png', level: 70, desc: 'Basic programming knowledge and data structures', sizeClass: 'size-small' },
  { name: 'HTML', img: '/icons/html.png', level: 80, desc: 'Structuring content on the web', sizeClass: 'size-medium' },
  { name: 'MySQL', img: '/icons/mysql.png', level: 80, desc: 'Relational database management', sizeClass: 'size-small' },
  { name: 'PostgreSQL', img: '/icons/postgres.png', level: 75, desc: 'Advanced SQL and schema design', sizeClass: 'size-medium' },
  { name: 'Postman', img: '/icons/postman.png', level: 70, desc: 'API testing and endpoint validation', sizeClass: 'size-small' },
  { name: 'Power BI', img: '/icons/PowerBI.jpeg', level: 65, desc: 'Creating dashboards and insights', sizeClass: 'size-small' },
  { name: 'GitHub', img: '/icons/Github.png', level: 75, desc: 'Code collaboration and repositories', sizeClass: 'size-medium github-padding' },
  { name: 'React', img: '/icons/react.png', level: 75, desc: 'Component-based frontend development', sizeClass: 'size-large' },
  { name: 'SQL', img: '/icons/sql.png', level: 80, desc: 'Data querying and joins', sizeClass: 'size-medium' },
  { name: 'Tableau', img: '/icons/tab.png', level: 70, desc: 'Data visualization and charts', sizeClass: 'size-large' },
  { name: 'Vite', img: '/icons/vite.jpeg', level: 65, desc: 'Fast frontend build tool', sizeClass: 'size-small' },
  { name: 'VS Code', img: '/icons/vscode.jpeg', level: 85, desc: 'Primary coding IDE', sizeClass: 'size-medium' },
];

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <img
              src={s.img}
              alt={s.name}
              className={`skill-icon ${s.sizeClass}`} // ✅ Fixed interpolation
            />
            <h3 className="skill-name">{s.name}</h3>
            <div className="skill-level">
              <div className="skill-progress-bar">
                <div className="skill-progress" style={{ width: `${s.level}%` }}></div> {/* ✅ Fixed style */}
              </div>
              <span>{s.level}%</span>
            </div>
            <p className="skill-description">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
