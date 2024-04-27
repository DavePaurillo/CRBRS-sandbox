"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";

export function HeroImg() {
	return (
		<CardContainer className='inter-var'>
			<CardBody className='relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:bg-opacity-65 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border	'>
				<CardItem translateZ='100' className='w-full mt-4'>
					<Image
						src='/crbrs-hero.png'
						height='1000'
						width='1000'
						className='w-full object-cover rounded-xl group-hover/card:shadow-xl'
						alt='thumbnail'
					/>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}