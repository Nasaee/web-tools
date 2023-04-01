import data from '../../data';
import Card from '../../components/Card/ Card';
import './Section.css';

const Section = () => {
  return (
    <main className="main">
      {data.map((category) => {
        const { title, linkName, icon, items } = category;
        return (
          <section key={title} id={`${linkName}`} className="section">
            <div className="icon-container">{icon}</div>
            <h2 className="section-title">{title}</h2>
            <div className="cards">
              {items.map((item) => {
                return <Card {...item} key={item.name} />;
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
};
export default Section;
