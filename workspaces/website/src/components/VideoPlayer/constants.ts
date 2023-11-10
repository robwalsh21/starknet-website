export type Chapter = {
  id: string;
  subtitle: string;
  title: string;
  poster: string;
  thumbnail: string;
  description: string;
  videoId: string;
  durationTime: string;
  content: string[];
};

export const playlist: Chapter[] = [
  {
    id: "scaling-eth",
    subtitle: "Chapter 1",
    title: "How Starknet Scales Ethereum",
    description: "Chapter 1 explains how Starknet works at a high level",
    poster: "/assets/video/chapter1.png",
    thumbnail: "/assets/video/chapter1.png",
    videoId: "abd99c9696f1862f828c6e18136d75e5",
    durationTime: "02:42",
    content: ['Blockchains aim to achieve three core attributes: security, decentralization, and scalability. In the blockchain world, a well-known trilemma is that it\'s possible to achieve only two of these concurrently in a given system, inevitably requiring a compromise on the third. Ethereum places a higher emphasis on security and decentralization, impacting its scalability. Growth in the number of Ethereum users leads to slow transaction speeds and high gas prices, hindering Ethereum’s widespread adoption.', 'How can we make Ethereum scalable without undermining its security and decentralization? This is where the Starknet Validity Rollup comes in. Combining Ethereum and Starknet achieves massive scalability.','Starknet achieves scale by shifting transaction processing off the Ethereum Mainnet (what we call off-chain) while retaining a summary of the transactions onchain. Transactions are grouped in batches into blocks, processed off-chain, and then summarized into a single onchain transaction. Since transactions occur off-chain, it\'s vital to ensure the integrity of the transactions and their execution without having to re-execute them. Starknet addresses this by employing STARK (Scalable, Transparent ARgument of Knowledge) proofs for verifiable computation. Starknet then transmits only essential information about the block and the proof to Ethereum, where it is verified with minimal computational effort.']
  },
  {
    id: "sequencer",
    subtitle: "Chapter 2",
    title: "The Starknet Sequencer",
    description: "Chapter 2 explains about the Starknet Sequencer",
    poster: "/assets/video/chapter2.png",
    thumbnail: "/assets/video/chapter2.png",
    videoId: "7ca4a89a8031a1737e4632ec498afb55",
    durationTime: "02:24",
    content: ['The first core component of Starknet is the Starknet Sequencer. Sequencers take on the pivotal role of overseeing the validation and execution of transactions and proposing blocks. Their primary function involves grouping transactions and processing them as a collective entity. The unsuccessful transactions are flagged and held back by the Sequencer, allowing only the successful ones to move forward and get included in a block. Starknet’s sequencers can handle substantially more transactions per second than Ethereum nodes.', 'The next core component in Starknet is the Prover']
  },
  {
    id: "prover",
    subtitle: "Chapter 3",
    title: "The Starknet Prover",
    description: "Chapter 3 explains how the Starknet Prover works",
    poster: "/assets/video/chapter3.png",
    thumbnail: "/assets/video/chapter3.png",
    videoId: "b66a934468bf72606e60abd7d475acf3",
    durationTime: "02:26",
    content: ['The Prover establishes the mathematical validity of the block\'s transactions by generating a STARK proof, thus ensuring its integrity. Blocks are organized into groups and processed concurrently. During this phase, the Prover documents each step of transaction execution, creating what is known as the Execution Trace, along with tracking the resultant changes in the system\'s state, termed the State Diff.', 'An algorithm then meticulously blows up and mixes data from the Execution Trace. This step brings any issues to the forefront, as even a single instance of bad data contaminates the entire expanded dataset, making any issues unmissable. The Prover then selects a set of random samples from this blown-up data to create the STARK proof. This STARK proof asserts the validity of thousands of transactions.']
  },
  {
    id: "eth-settlement",
    subtitle: "Chapter 4",
    title: "Secure Settlement on Ethereum",
    description: "Chapter 4 explains how to secure settlement on Ethereum",
    poster: "/assets/video/chapter4.png",
    thumbnail: "/assets/video/chapter4.png",
    videoId: "af654c93367a0d4eae7ea90252ac342e",
    durationTime: "03:28",
    content: ['The STARK proof and State Diff are transmitted to Ethereum as a transaction, where an Ethereum node accepts the transactions and unpacks the proof and the State Diff. These unpacked components are processed by two Ethereum smart contracts: the Verifier and Starknet Core. The Verifier contract breaks down the proof and analyzes samples within it. Any hint of problematic data in the samples of the proof leads to prompt rejection by the Verifier. Once the proof\'s validity is confirmed, it advances to the Starknet Core smart contract.', 'The Core contract verifies the proof\'s authenticity and confirms receiving the State Diff, subsequently updating the Starknet state on the Ethereum blockchain. This updated state is then added to an Ethereum block, distributed across the node network for validation and voting. When the block accumulates sufficient votes, it achieves "finalized" status, cementing its place as an immutable part of Ethereum.']
  },
];

export const playlistObject: Record<string, Chapter> = playlist.reduce(
  (acc, chapter) => ({ [chapter.id]: chapter, ...acc }),
  {}
);
export const CHAPTER_CHANGE_TIMEOUT = 5;

export const VIDEOJS_INACTIVITY_TIMEOUT = 3000;

export const VIDEO_SHARE_DOMAIN = "https://www.starknet.io";
