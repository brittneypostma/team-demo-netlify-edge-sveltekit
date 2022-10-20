export async function load(event) {
    const geo = event.platform.context.geo
    console.log(geo.city)
    return {
        city: geo.city
    }
}