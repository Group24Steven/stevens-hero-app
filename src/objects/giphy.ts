export class GiphyRoot {
    data!: Daum[];
    pagination!: Pagination;
    meta!: Meta;
}

export class Daum {
    type!: string;
    id!: string;
    url!: string;
    slug!: string;
    bitly_gif_url!: string;
    bitly_url!: string;
    embed_url!: string;
    username!: string;
    source!: string;
    title!: string;
    rating!: string;
    content_url!: string;
    source_tld!: string;
    source_post_url!: string;
    is_sticker!: number;
    import_datetime!: string;
    trending_datetime!: string;
    images!: Images;
    user?: User;
    analytics_response_payload!: string;
    analytics!: Analytics;
}

export class Images {
    original!: Original;
    downsized!: Downsized;
    downsized_large!: DownsizedLarge;
    downsized_medium!: DownsizedMedium;
    downsized_small!: DownsizedSmall;
    downsized_still!: DownsizedStill;
    fixed_height!: FixedHeight;
    fixed_height_downsampled!: FixedHeightDownsampled;
    fixed_height_small!: FixedHeightSmall;
    fixed_height_small_still!: FixedHeightSmallStill;
    fixed_height_still!: FixedHeightStill;
    fixed_width!: FixedWidth;
    fixed_width_downsampled!: FixedWidthDownsampled;
    fixed_width_small!: FixedWidthSmall;
    fixed_width_small_still!: FixedWidthSmallStill;
    fixed_width_still!: FixedWidthStill;
    looping!: Looping;
    original_still!: OriginalStill;
    original_mp4!: OriginalMp4;
    preview!: Preview;
    preview_gif!: PreviewGif;
    preview_webp!: PreviewWebp;
    hd?: Hd;
    "480w_still": N480wStill;
}

export class Original {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    mp4_size!: string;
    mp4!: string;
    webp_size!: string;
    webp!: string;
    frames!: string;
    hash!: string;
}

export class Downsized {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class DownsizedLarge {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class DownsizedMedium {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class DownsizedSmall {
    height!: string;
    width!: string;
    mp4_size!: string;
    mp4!: string;
}

export class DownsizedStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class FixedHeight {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    mp4_size!: string;
    mp4!: string;
    webp_size!: string;
    webp!: string;
}

export class FixedHeightDownsampled {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    webp_size!: string;
    webp!: string;
}

export class FixedHeightSmall {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    mp4_size!: string;
    mp4!: string;
    webp_size!: string;
    webp!: string;
}

export class FixedHeightSmallStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class FixedHeightStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class FixedWidth {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    mp4_size!: string;
    mp4!: string;
    webp_size!: string;
    webp!: string;
}

export class FixedWidthDownsampled {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    webp_size!: string;
    webp!: string;
}

export class FixedWidthSmall {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
    mp4_size!: string;
    mp4!: string;
    webp_size!: string;
    webp!: string;
}

export class FixedWidthSmallStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class FixedWidthStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class Looping {
    mp4_size!: string;
    mp4!: string;
}

export class OriginalStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class OriginalMp4 {
    height!: string;
    width!: string;
    mp4_size!: string;
    mp4!: string;
}

export class Preview {
    height!: string;
    width!: string;
    mp4_size!: string;
    mp4!: string;
}

export class PreviewGif {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class PreviewWebp {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class Hd {
    height!: string;
    width!: string;
    mp4_size!: string;
    mp4!: string;
}

export class N480wStill {
    height!: string;
    width!: string;
    size!: string;
    url!: string;
}

export class User {
    avatar_url!: string;
    banner_image!: string;
    banner_url!: string;
    profile_url!: string;
    username!: string;
    display_name!: string;
    description!: string;
    instagram_url!: string;
    website_url!: string;
    is_verified!: boolean;
}

export class Analytics {
    onload!: Onload;
    onclick!: Onclick;
    onsent!: Onsent;
}

export class Onload {
    url!: string;
}

export class Onclick {
    url!: string;
}

export class Onsent {
    url!: string;
}

export class Pagination {
    total_count!: number;
    count!: number;
    offset!: number;
}

export class Meta {
    status!: number;
    msg!: string;
    response_id!: string;
}
  