import './skills.css';

// const skills = [
//   'html',
//   'css',
//   'Javascript',
//   'React Js',
//   'Node Js',
//   'Data structures',
//   'Bootstrap',
//   'Java',
//   'Problem Solving',
//   'Mongo DB',
//   'SQL',
//   "REST API's",
//   'Python',
//   'Git',
//   'Github',
// ];

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
