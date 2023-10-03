import React from 'react';
import Prodmobilelogo from './assets/image-product-mobile.jpg';
import Proddesktoplogo from './assets/image-product-desktop.jpg';

function App() {
  return <ProductCard />;
}

function ProductCard() {
  return (
    <div className="max-w-sm flex flex-col md:max-w-2xl justify-around md:flex-row mx-auto shadow-2xl rounded-2xl bg-white h-full hover:shadow-neutral-600">
      <div className="md:w-full ">
        <picture>
          <source media="(min-width: 768px)" srcset={Proddesktoplogo} />
          <img
            srcset={Prodmobilelogo}
            alt="Prodcut-Image"
            className="md:object-fill object-contain w-auto md:h-full rounded-t-2xl md:rounded-2xl md:rounded-r-sm hover:animate-pulse ease-in-out"
          />
        </picture>
      </div>

      <div className="flex flex-col justify-between md:justify-around px-6 pt-4 md:pt-8 py-6 h-full md:w-fit md:px-8">
        <h6 className="uppercase md:text-xs text-slate-500 font-medium tracking-extrawidest md:pb-4">
          Perfume
        </h6>
        <h1 className="text-4xl font-fraunces text-primary-verydarkblue py-2 md:w-3/4">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-medium text-primary-darkgreyishblue text-md tracking-normal leading-7 py-4 md:px-1">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div
          className="flex items-center justify-between text-primary-darkcyan w-40 pb-6 py-2
        "
        >
          <h2 className="font-fraunces text-4xl hover:text-green-600">
            $149.99{' '}
          </h2>
          <span className="line-through text-slate-400 text-md font-montserrat px-6 hover:animate-ping">
            $169.99
          </span>
        </div>
        <button className="flex items-center justify-center p-4  text-bold bg-primary-darkcyan text-white font-medium rounded-lg shadow-lg cursor-pointer hover:bg-green-900 ease-in-out">
          <span>
            <img
              className="h-5 px-4"
              src="https://raw.githubusercontent.com/hashmi7917/product-preview-card-component-main/1db32a312ede2ea9788cbee1d814d68cb6241278/images/icon-cart.svg"
            />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
