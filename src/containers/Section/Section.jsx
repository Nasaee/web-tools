import data from '../../data';
import Card from '../../components/Card/ Card';
import './Section.css';

console.log(data);

const Section = () => {
  return (
    <main>
      {data.map((category) => {
        const { title, linkName, icon, items } = category;
        return (
          <section key={title} id={`${linkName}`}>
            <div className="icon-container">{icon}</div>
            <h2>{title}</h2>
            {items.map((item) => {
              return <Card {...item} />;
            })}
          </section>
        );
      })}
    </main>
  );
};
export default Section;
