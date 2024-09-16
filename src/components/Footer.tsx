const Footer: React.FC = (): JSX.Element => {
    return (
      <footer className="bg-gray-800 text-white p-4">
        <div className="text-center">
          © {new Date().getFullYear()} My Simple Blog. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
  