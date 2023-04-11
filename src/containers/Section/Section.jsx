import data from '../../data';
import Card from '../../components/Card/ Card';
import { useGlobalContext } from '../../context';
import './Section.css';

const Section = () => {
  const { closeMenu } = useGlobalContext();
  return (
    <main className="main" onClick={closeMenu}>
      {data.map((category, i) => {
        const { title, linkName, icon, items } = category;
        return (
          <section
            key={title}
            id={`${linkName}`}
            className={`section ${i % 2 === 0 && 'gray-background'}`}
          >
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
