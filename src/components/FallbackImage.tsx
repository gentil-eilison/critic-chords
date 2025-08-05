"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface FallbackImageProps extends Omit<ImageProps, "src"> {
    src: string | StaticImport;
    fallbackSrc?: string;
}

export default function FallbackImage({
    src,
    fallbackSrc = "/album-artist-fallback.png",
    alt,
    ...props
}: FallbackImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
}