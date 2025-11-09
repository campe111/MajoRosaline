import { test, expect } from '@playwright/test'

const PRODUCTS_SECTION = 'section#productos'

async function gotoProductsSection(page, hash = '/#productos') {
  await page.goto(hash, { waitUntil: 'networkidle' })
  await page.waitForSelector(`${PRODUCTS_SECTION} article`, { state: 'attached', timeout: 20000 })
  await page.locator(PRODUCTS_SECTION).scrollIntoViewIfNeeded()
}

test.describe('Landing de productos', () => {
  test('Carga la página principal y muestra la colección', async ({ page }) => {
    await gotoProductsSection(page, '/')
    await expect(page.getByRole('heading', { name: /colección signature/i })).toBeVisible({ timeout: 20000 })
    await expect(page.locator(`${PRODUCTS_SECTION} article`).first()).toBeVisible({ timeout: 20000 })
  })

  test('Filtra productos por término de búsqueda', async ({ page }) => {
    await gotoProductsSection(page)
    const searchInput = page.locator(`${PRODUCTS_SECTION} input[type="search"]`)
    await searchInput.waitFor({ state: 'visible', timeout: 10000 })
    await searchInput.fill('detox')

    const visibleCards = page.locator(`${PRODUCTS_SECTION} article`)
    await expect(visibleCards).toHaveCount(2)
    await expect(page.getByRole('heading', { name: /tratamiento detox/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /ampollas detox balance/i })).toBeVisible()

    await searchInput.fill('xyz')
    await expect(page.getByText(/no encontramos coincidencias/i)).toBeVisible()
  })

  test('Abre y cierra la galería modal', async ({ page }) => {
    await gotoProductsSection(page)
    const firstCard = page.locator(`${PRODUCTS_SECTION} article`).first()
    await firstCard.waitFor({ state: 'visible', timeout: 10000 })
    await firstCard.scrollIntoViewIfNeeded()
    await firstCard.locator('button').first().click()

    const closeButton = page.getByRole('button', { name: 'Cerrar galería' })
    await expect(closeButton).toBeVisible()

    await closeButton.click()
    await expect(closeButton).toHaveCount(0)
  })
})

