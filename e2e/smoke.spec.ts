import { expect, test } from '@playwright/test'
test('home links to quote flow',async({page})=>{await page.goto('/');await expect(page.getByRole('heading',{name:/a viagem começa/i})).toBeVisible();await page.getByRole('link',{name:/descobrir minha próxima viagem/i}).click();await expect(page).toHaveURL(/orcamento/);await expect(page.getByText(/etapa 1 de 6/i)).toBeVisible()})
