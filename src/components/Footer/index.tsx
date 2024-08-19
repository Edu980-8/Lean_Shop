import styles from "./Footer.module.scss";
import image from "../../../public/Icon.png";
import { DownloadCard } from "@/components/DownloadCard/DownloadCard";

const Footer = () => {
  const imagen = '/clicon_logo.svg'
  return (
    
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.horizontalFooter}>
          <div className={styles.socialMedia}>
            <div className={styles.brand_container}>
              <img src={imagen} alt="" />
              <h2>CLICON</h2>
              
            </div>
            
            <h4>Customer Support:</h4>
            <h3>(629) 555- 0129</h3>
            <p>4517 Washington Ave.</p>
            <p>Manchester, Kentucky 39495 </p>
            <p className={styles.email}> info@kinbo.com</p>
          </div>
          <div className={styles.category}>
            <h3>TOP CATEGORY</h3>
            <p> Computer & Laptop</p>
            <p>SmartPhone</p>
            <p>Headphone</p>
            <p>Accesories</p>
            <p>Camera & Photo</p>
            <p>TV & Homes</p>
            <p>Browse All Product</p>
          </div>

          <div className={styles.socialMedia}>
            <h3>QUICK LINKS</h3>
            <a href="">Shop Product</a>
            <a href="">Shoping Cart</a>
            <a href="">WishList</a>
            <a href="">Compare</a>
            <a href="">Track Order</a>
            <a href="">Customer Help</a>
            <a href="">About Us</a>
          </div>

          <div className={styles.socialMedia}>
            <h3>DOWNLOAD APP</h3>
            <div className={styles.parent_download}>
              <DownloadCard type={"type1"}></DownloadCard>
              <DownloadCard type={"type2"}></DownloadCard>
            </div>
          </div>

          <div className={styles.socialMedia}>
            <h3>POPULAR TAG</h3>
            <div className={styles.tagsContainer}>
              <p>Game</p>
              <p>iPhone</p>
              <p>TV</p>
              <p>Asus Laptops</p>
              <p>Macbook</p>
              <p>SSD</p>
              <p>Graphics Card</p>
              <p>Power Bank</p>
              <p>Smart TV</p>
              <p>Speaker</p>
              <p>Tablet</p>
              <p>Microwave</p>
              <p>Samsung</p>
            </div>
          </div>
        </div>

        <div className={styles.sep} />
        <div className={styles.copyRight}>
          <p>© {new Date().getFullYear()} LeanShop - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
