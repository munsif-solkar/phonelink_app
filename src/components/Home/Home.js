import {React} from "react";
import { Container} from "react-bootstrap";

import Header from '../Header/Header';
import ProductGroup from "../Product/ProductGroup";
import CaregoriesCards from "../categories/Categories_cards";

function Home() {
    return (
        <>
            <Header />
            <Container style={{margin:"30px auto"}}>
                <ProductGroup title="Printed Mobile Skins" type="newly_launched"/>
            </Container>
            <Container style={{margin:"30px auto"}}>
                <CaregoriesCards/>
            </Container>
        </>
    )
}
export default Home;