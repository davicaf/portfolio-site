#!/usr/bin/env python3
"""
Gera a imagem de preview Open Graph (public/og-image.png) para redes sociais e compartilhamento de links.
Dimensões: 1200x630 (padrão Open Graph e Twitter Cards).
"""

import os
from PIL import Image, ImageDraw, ImageFont

def generate_og_image(output_path: str = "public/og-image.png") -> None:
    width = 1200
    height = 630

    # Criação da tela base com gradiente vertical suave (zinc-950 a slate-900)
    img = Image.new("RGBA", (width, height), (9, 9, 11, 255))
    draw = ImageDraw.Draw(img)

    for y in range(height):
        ratio = y / height
        r = int(9 + (15 - 9) * ratio)
        g = int(9 + (23 - 9) * ratio)
        b = int(11 + (42 - 11) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # Glow azul no canto superior direito
    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    center_x, center_y = 1050, 120
    for radius in range(350, 0, -5):
        alpha = int((1 - radius / 350) * 45)
        glow_draw.ellipse(
            [center_x - radius, center_y - radius, center_x + radius, center_y + radius],
            fill=(37, 99, 235, alpha)
        )

    # Glow esmeralda sutil no canto inferior esquerdo
    center_x2, center_y2 = 150, 520
    for radius in range(300, 0, -5):
        alpha = int((1 - radius / 300) * 35)
        glow_draw.ellipse(
            [center_x2 - radius, center_y2 - radius, center_x2 + radius, center_y2 + radius],
            fill=(16, 185, 129, alpha)
        )

    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Moldura externa translúcida (efeito de card moderno)
    margin = 40
    draw.rounded_rectangle(
        [(margin, margin), (width - margin, height - margin)],
        radius=24,
        outline=(63, 63, 70, 180),
        width=2
    )

    # Fontes do sistema
    font_bold = "/usr/share/fonts/google-droid-sans-fonts/DroidSans-Bold.ttf"
    font_regular = "/usr/share/fonts/google-droid-sans-fonts/DroidSans.ttf"

    f_badge = ImageFont.truetype(font_bold, 20)
    f_name = ImageFont.truetype(font_bold, 74)
    f_sub1 = ImageFont.truetype(font_bold, 34)
    f_sub2 = ImageFont.truetype(font_regular, 24)
    f_tag = ImageFont.truetype(font_bold, 18)
    f_footer = ImageFont.truetype(font_regular, 20)

    # 1. Badge Pill (Status profissional)
    badge_x, badge_y = 80, 85
    badge_text = "ESTAGIÁRIO DE PROCESSOS DIGITAIS @ MICHELIN"
    draw.rounded_rectangle(
        [(badge_x, badge_y), (badge_x + 580, badge_y + 44)],
        radius=22,
        fill=(24, 24, 27, 230),
        outline=(39, 39, 42, 255),
        width=1
    )
    # Ponto verde indicador de atividade
    draw.ellipse([(badge_x + 18, badge_y + 16), (badge_x + 30, badge_y + 28)], fill=(34, 197, 94, 255))
    draw.text((badge_x + 42, badge_y + 11), badge_text, font=f_badge, fill=(228, 228, 231, 255))

    # 2. Nome
    draw.text((80, 160), "Davi Ferreira", font=f_name, fill=(255, 255, 255, 255))

    # 3. Subtítulo e Posicionamento
    draw.text(
        (80, 265),
        "Estudante de Engenharia de Software na UFAM",
        font=f_sub1,
        fill=(96, 165, 250, 255) # Azul suave
    )

    draw.text(
        (80, 320),
        "Estágio na Michelin Manaus • Fundamentos de Computação & Aplicações Industriais",
        font=f_sub2,
        fill=(161, 161, 170, 255) # Zinc-400
    )

    # Divisor horizontal sutil
    draw.line([(80, 390), (width - 80, 390)], fill=(39, 39, 42, 200), width=1)

    # 4. Chips de Tecnologias
    tags = ["Next.js", "React", "TypeScript", "Tailwind CSS", "C", "Python", "Dataverse", "Sockets TCP"]
    tag_x = 80
    tag_y = 425
    for tag in tags:
        bbox = draw.textbbox((0, 0), tag, font=f_tag)
        tag_w = bbox[2] - bbox[0] + 32
        draw.rounded_rectangle(
            [(tag_x, tag_y), (tag_x + tag_w, tag_y + 40)],
            radius=12,
            fill=(24, 24, 27, 200),
            outline=(63, 63, 70, 180),
            width=1
        )
        draw.text((tag_x + 16, tag_y + 9), tag, font=f_tag, fill=(212, 212, 216, 255))
        tag_x += tag_w + 14

    # 5. Rodapé informativo
    draw.text((80, 520), "Manaus, AM — Brasil", font=f_footer, fill=(113, 113, 122, 255))
    draw.text((360, 520), "github.com/davicaf", font=f_footer, fill=(113, 113, 122, 255))
    draw.text((640, 520), "linkedin.com/in/davicfr", font=f_footer, fill=(113, 113, 122, 255))
    draw.text((950, 520), "davicaf.com", font=ImageFont.truetype(font_bold, 20), fill=(244, 244, 245, 255))

    os.makedirs(os.path.dirname(output_path) or ".", exist_ok=True)
    img.convert("RGB").save(output_path, "PNG", optimize=True)
    print(f"Generated {output_path} ({os.path.getsize(output_path)} bytes)")

if __name__ == "__main__":
    generate_og_image()
