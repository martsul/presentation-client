import { CustomButton } from "../custom-button/custom-button";
import { SearchInput } from "../search-input/search-input";
import { UserIcon } from "../user-icon/user-icon";
import { useLogin } from "../../contexts/login-context/use-login";

export const Header = () => {
    const { logOut } = useLogin();

    return (
        <header className="mb-4 flex-column-reverse flex-sm-row d-flex gap-3 align-items-sm-center align-items-sm-stretch justify-content-between">
            <div>
                <SearchInput />
            </div>
            <div className="d-flex gap-3 justify-content-between">
                <UserIcon />
                <CustomButton
                    handlerClick={logOut}
                    isSmall={true}
                    text={"Log Out"}
                />
            </div>
        </header>
    );
};
