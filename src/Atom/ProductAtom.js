// import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue} from 'recoil';

import { atom } from 'recoil';


const Productatomstate = atom({
  key: 'Productatomstate', // unique ID (with respect to other atoms/selectors)
  default: [
    { id: 1, Name: "Alaa-Recoil", Tilte: "ElNaggar" },
    { id: 2, Name: "abdo-Recoil", Tilte: "ElNaggar" },
    { id: 3, Name: "eltawabb-Recoil", Tilte: "ElNaggar" },
    { id: 4, Name: "vfffffff-Recoil", Tilte: "ElNaggar" },
  ], // default value (aka initial value)
});

export default Productatomstate;