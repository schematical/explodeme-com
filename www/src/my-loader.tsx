/*
import nextConfig from "../next.config.mjs";

export default function cloudinaryLoader({
                                             src,
                                             width,
                                             quality,
                                         }: {
    src: string
    width: number
    quality?: number
}) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    if(process.env.PUBLIC_ASSET_URL){
        nextConfig.assetPrefix =`${process.env.PUBLIC_ASSET_URL}/${process.env.ASSET_HASH}/${src}`;
    }
    return `${process.env.}${src}`
}*/
