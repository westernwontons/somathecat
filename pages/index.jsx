import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Head from "next/head";

export const getStaticProps = async (ctx) => {
	return {
		props: {
			data: null,
		},
	};
};

export default function Home() {
	const parallax = useRef(null);
	return (
		<>
			<Head>
				<title>SomaTheCat</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<div className="bg-cover">
				<Parallax
					ref={parallax}
					pages={4}
					style={{
						backgroundColor: "#e5e5f7",
						backgroundImage: "radial-gradient(#444cf7 1.6px, #e5e5f7 1.6px)",
						backgroundSize: "32px 32px",
					}}>
					<ParallaxLayer
						offset={0}
						speed={1}
						factor={0.8}
						className="flex justify-center"
						onClick={() => parallax.current.scrollTo(1)}>
						<Image
							priority={true}
							src="/somathecat.svg"
							width={1000}
							height={1000}
							alt="SomaTheCat Heading"
							className="select-none"
						/>
					</ParallaxLayer>
					<ParallaxLayer
						offset={1}
						speed={0.6}
						className="bg-slate-900"
						onClick={() => parallax.current.scrollTo(2)}>
						<div className="flex justify-center">
							<Image
								src="/soma4.png"
								layout="intrinsic"
								width={1000}
								height={1000}
								alt=""
							/>
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={1.6} speed={1.2}>
						<div className="flex justify-center">
							<div className="relative -right-8 -top-24 md:-top-0 md:-right-24">
								<Image
									src="/mewmewmew.svg"
									layout="intrinsic"
									width={400}
									height={400}
									alt=""
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={2}
						speed={2}
						className="bg-emerald-300 bg-opacity-80"
						onClick={() => parallax.current.scrollTo(3)}>
						<div className="flex justify-center">
							<Image
								src="/soma1.png"
								width={800}
								height={800}
								alt="soma image 2"></Image>
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={2.56} speed={3.4}>
						<div className="flex justify-center">
							<div className="relative -top-44 md:-top-0 md:-right-96">
								<Image
									src="/mewBottomRight.svg"
									width={400}
									height={400}
									alt="mew bottom right"
								/>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer
						offset={3}
						speed={2.2}
						className="bg-sky-600 bg-opacity-80">
						<div className="flex justify-center">
							<div className="relative top-32 md:top-20">
								<Image
									src="/soma3.png"
									width={1000}
									height={800}
									alt="soma image 3"></Image>
							</div>
						</div>
					</ParallaxLayer>
					<ParallaxLayer offset={3} speed={1.1}>
						<div className="flex justify-center">
							<Image src="/inkpaintBorder.png" layout="fill" alt=""></Image>
						</div>
					</ParallaxLayer>
				</Parallax>
			</div>
		</>
	);
}
