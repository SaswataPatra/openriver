import { FunctionComponent } from "react";
import NftItem from "../items";
import { NftMeta } from "@/types/nft";

// interface NftImageProps {
//   item: {
//     description: string;
//     image: string;
//     name: string;
//     attributes: { trait_type: string; value: string }[];
//   }[];
// }

interface NftImageProps {
  item: NftMeta[];
}
// interface NftImageProps {
//     item : any
// }

const NftList: FunctionComponent<NftImageProps> = ({ item }) => {
  return (
    <>
      {item.map((nft) => (
        <div key={nft.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <NftItem />
        </div>
      ))}
    </>
  );
};
export default NftList;
