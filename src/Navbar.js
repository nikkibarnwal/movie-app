import { Component } from "react";
// import styled from "styled-components";
import styles from './Navbar.module.css';


class Navbar extends Component{
    render(){
        let {cartCount} = this.props
        return(
            <>
                <div className={styles.nav}>
                      <div className={styles.title}>Movie-app</div>
                    <div className={styles.cartIconContainer}>
                        <img alt="" className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/9284/9284424.png" />
                        <span color={styles.cartCount}>{cartCount}</span>
                    </div>
                </div>
            </>
        )
    }
}
export default Navbar;
