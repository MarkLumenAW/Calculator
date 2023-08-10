import { Icon } from "@iconify/react";

export default function Footer(props) {
  return (
    <section className="footer">
      <span>Designed and Coded by Alex Wang</span>
      <div>
        <a href="https://github.com/MarkLumenAW/FCC_Frontend_Project_4_Calculator" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" color="#888" width="1rem" />
        </a>
        <a href="https://www.linkedin.com/in/alexwang-au/" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:linkedin" color="#888" width="1rem" />
        </a>
      </div>
    </section>
  );
};
