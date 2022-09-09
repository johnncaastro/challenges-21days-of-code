import './styles.scss';

export function MenuResponsive() {
  return (
    <div className='responsive-menu'>
      <ul>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Product</li></a>
        <a href="#"><li>Pricing</li></a>
        <a href="#"><li>Sign up</li></a>
      </ul>
    </div>
  )
}