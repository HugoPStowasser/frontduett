import { HeaderContent } from "../../styles/HeaderStyle"

type ContainerProps = {
    children: React.ReactNode; 
};

const Header = (props: ContainerProps) =>{
    return(
        <div>
            <HeaderContent>
                <img src="https://duettsoftware.com/assets/images/logoDark.svg" alt="logo" />
            </HeaderContent>
            {props.children}
        </div>
    )
}

export default Header