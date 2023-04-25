import './App.css';
import Cards from './cards';

function App() {
  const cardDetails = [
    {
      productId: '1',
      productPic: 'https://m.media-amazon.com/images/I/71N+8vdClWL._UL1500_.jpg',
      productName: 'watch',
      brand: 'TITAN',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores.',
      price: '7$',
      rating: '4'
    },
    {
      productId: '2',
      productPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLlfjrxHmN0qs1aqQkZ4l7WWqc4BTohZzBHA&usqp=CAU',
      productName: 'Shoes',
      brand: 'ADIDAS',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores..',
      price: '8$',
      rating: 'Rating: 5'
    },
    {
      productId: '3',
      productPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOaieuNBrX29iKoKJrCHxeJDi1tb58vgXpw&usqp=CAU',
      productName: 'T-SHIRT',
      brand: 'NIKE',
      productDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolores..',
      price: '8$',
      rating: 'Rating: 5'
    }
  ];


 


  return (
    <div className="App">
      {
  cardDetails.map((productDetail, index) => (
    <Cards key={productDetail.productId} productDetail={productDetail}  />
  ))
      }
      
    </div>
  );
}

export default App;
