import NavBar from '../NavBar';
import './styles.scss';

const PageLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className='main'>
        <div className='main-content'>{children}</div>
      </main>
    </>
  );
};

export default PageLayout;
