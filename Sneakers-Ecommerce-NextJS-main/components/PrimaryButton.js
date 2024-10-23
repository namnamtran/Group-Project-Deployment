import { AiOutlineShoppingCart } from'react-icons/ai'
export default function PrimaryButton({children}) {
    return (
        <button className="flex items-center bg-white border border-black rounded-md font-medium my-6 py-2 px-4 shadow-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 mx-auto">
        <AiOutlineShoppingCart style={{ fontSize: '1rem', verticalAlign: 'middle' }} />
        <span className="ml-2" style={{ fontSize: '1rem', verticalAlign: 'middle' }}>
          {children}
        </span>
      </button>
      
    )
}