import React from 'react';
import  './styles.module.css';

export const ProductItem = ({title}) => {
  return (
    <div className="product-item">
                <div className=" bbb_deals_item">
                    <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt=""/></div>
                    <div className="bbb_deals_content">
                        <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                            <div className="title_product_row"><a href="#">Laptops</a></div>
                        </div>
                        <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                            <div className="title_product_row"><a href="#">{title}</a></div>
                            <div className="bbb_deals_item_price">₹27,550</div>
                        </div>
                    </div>
                </div>
    </div>
  );
};
