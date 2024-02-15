import './skills.css';


const Skills = (props) => {
  const skills = props.skills;
  const opposite = props.opposite;
  return (
    <ul className={`skills ${opposite ? 'opposite' : ''}`}>
      {skills.map((skill) => (
        <div key={skill} className={`skill`}>
          {skill}
        </div>
      ))}
    </ul>
  );
};

export default Skills;
