// 'use client'

// // app/components/CartWrapper.tsx
// 'use client';
// import { CartProvider } from 'use-shopping-cart';
// import React, { JSX, PropsWithChildren } from 'react';

// interface MyComponentProps {
//     children: React.ReactNode,
//     mode: string,
//     cartMode : string,
//     stripe: string,
//     currency : string,
//     billingAddressCollection : boolean,
//     shouldPersist : boolean,
//     ClientOnlyConfig : string
//   }

  
//   type SliderProps = PropsWithChildren<{
//     wrapper?: keyof JSX.IntrinsicElements | (() => JSX.Element);
// }>;

// export function CartWrapper<MyComponentProps>({ children }: { children: React.ReactNode }) {
//   return (
//     <CartProvider
//       mode="payment"
//       cartMode="client-only"
//       stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
//       currency="USD"
//       billingAddressCollection={true}
//       shouldPersist={true}
//     >
//       {children}
//     </CartProvider>
//   );
// }

// // Type '{ children: ReactNode; mode: "payment"; cartMode: "client-only"; stripe: string; currency: string; 
// // billingAddressCollection: true; shouldPersist: true; }' is not assignable to type 'IntrinsicAttributes & ProviderProps'.

// //   Type '{ children: ReactNode; mode: "payment"; cartMode: "client-only"; stripe: string; currency: string; 
// // billingAddressCollection: true; shouldPersist: true; }' is missing the following properties from type 
// // 'ClientOnlyConfig': successUrl, cancelUrlts(2322)