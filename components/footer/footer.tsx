const Footer = () => {
  return (
    <section className="flex justify-center p-4">
      <p className="text-gray-600 dark:text-gray-600/50 font-medium">
        made with 💓 by
        <a
          href="https://github.com/Saif-Mohammed1"
          target="_blank"
          rel="noreferrer"
          className="text-black dark:text-gray-200/70 font-medium"
        >
          {" "}
          Saif{" "}
        </a>
        &copy; 2024 all rights received
      </p>
    </section>
  );
};

export default Footer;
