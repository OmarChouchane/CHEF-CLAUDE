import chefClaudeLogo from '../src/assets/images/chef-claude-icon.png';

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo} alt="chef claude logo" srcset="" />
            <h1>Chef Omar's Recipes</h1>
        </header>
    );
}