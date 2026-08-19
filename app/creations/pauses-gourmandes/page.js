'use client'

import Image from 'next/image'
import { useState, Fragment } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategoryJsonLd from '../../../components/CategoryJsonLd'
import Reveal from '../../../components/Reveal'
import CategoryClosing from '../../../components/CategoryClosing'
import CategoryTabs, { sortItems, priceFromLabel, DEFAULT_SORTS } from '../../../components/CategoryTabs'
import ParallaxImage from '../../../components/ParallaxImage'
import Breadcrumb from '../../../components/Breadcrumb'

const SEO_ARTICLE = `
  <h2>Traiteur pause gourmande et goûter d'entreprise à Paris</h2>
  <p>La <strong>pause gourmande d'entreprise</strong> est le moment le plus attendu de l'après-midi : entre deux sessions de séminaire, à la fin d'une formation ou pour célébrer une bonne nouvelle d'équipe. L'Écrin Traiteur livre vos goûters partout à Paris et en Île-de-France, avec des douceurs artisanales préparées le jour même.</p>

  <h2>Madeleines, cookies, tartelettes : une carte sucrée artisanale</h2>
  <p>Notre carte des pauses réunit les madeleines <strong>Mado Paris</strong>, réputées comme les meilleures de Paris, des cookies généreux, des cakes maison tranchés, des tartelettes citron ou praliné et des brochettes de fruits frais. Une sélection qui alterne le réconfortant et le léger, pour que chacun y trouve son plaisir, y compris les becs peu sucrés.</p>

  <h2>Quelle quantité prévoir pour une pause d'équipe ?</h2>
  <p>Comptez <strong>1,5 à 2 pièces sucrées par personne</strong> pour une pause de 20 à 30 minutes. Pour un après-midi complet de séminaire avec deux pauses, passez à 3 pièces en variant les familles : un cake tranché en début d'après-midi, madeleines et fruits frais vers 16h30. Ajoutez café, thé et jus pour une pause complète.</p>

  <h2>Commander votre goûter d'entreprise à Paris</h2>
  <p>Commandez avant <strong>14h la veille</strong> et recevez votre pause gourmande à l'heure exacte de votre programme. Conditionnement prêt à servir, facturation entreprise avec TVA. Pour les séminaires multi-jours ou les commandes récurrentes, demandez un devis personnalisé, réponse sous 24h.</p>
`

/* ─── Données ───────────────────────────────────────────────────── */

const HERO = {
  label: 'Pauses Gourmandes',
  description: 'La touche sucrée de l\'après-midi · pâtisseries, biscuits et fruits frais préparés le jour même pour rythmer vos pauses et goûters d\'entreprise.',
  hero: '/hero-pauses-gourmandes.webp',
}

/* Coffrets, tailles disponibles, même logique que les Madeleines
   sur la page Petit-déjeuner (FORMATS avec prix + « le plus choisi »). */
const COFFRETS_MADELEINES = [
  { id: 'madeleines-10', pieces: 10, price: 24.90, label: '10 pièces', sub: '4 à 6 pers.' },
  { id: 'madeleines-20', pieces: 20, price: 49.00, label: '20 pièces', sub: '8 à 12 pers.', popular: true },
  { id: 'madeleines-50', pieces: 50, price: 119.00, label: '50 pièces', sub: '25 à 30 pers.' },
]
const COFFRETS_MACARONS = [
  { id: 'macarons-12', pieces: 12, price: 29.90, label: '12 pièces', sub: '4 à 6 pers.' },
  { id: 'macarons-24', pieces: 24, price: 54.90, label: '24 pièces', sub: '8 à 12 pers.', popular: true },
  { id: 'macarons-48', pieces: 48, price: 99.90, label: '48 pièces', sub: '20 à 24 pers.' },
]

/* Douceurs, images partagées avec Petit-déjeuner quand le produit existe déjà,
   sinon visuels générés dans la DA du site (planche bois, lumière naturelle). */
export const PAUSES = [
  { id: 'madeleines',
    seoTitle: `Madeleines artisanales : la pause gourmande pour vos goûters d'entreprise à Paris`,
    seoHtml: `<p>Nos madeleines Mado Paris, réputées parmi les meilleures madeleines de Paris, sont moelleuses et cuites du jour, nature ou parfumées. En pause d'après-midi, c'est la douceur simple qui réunit l'équipe autour d'un café, et un joli geste à offrir pour marquer un moment. Livrées en coffret, du format d'équipe au grand volume.</p><h2>Commander vos madeleines à Paris et en Île-de-France</h2><p>Choisissez la taille du coffret selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Facturation entreprise avec TVA, devis sous 24h si besoin.</p>`,
    nom: 'Madeleines Mado Paris',                  img: '/prod-madeleines-50.webp', prix: 'dès 24,90 €', description: 'Madeleines moelleuses cuites du jour, nature ou parfumées.', coffrets: COFFRETS_MADELEINES },
  { id: 'macarons',
    seoTitle: `Macarons pour vos pauses et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Des macarons signés Pierre Morel, pâtissier à La Gacilly. Des coques à la meringue italienne, plus lisses et plus stables, garnies de ganaches franches et sans conservateur. Le coffret de 24 pièces couvre une pause d'après-midi ou un café gourmand pour une vingtaine de personnes, un macaron chacun, avec un assortiment de saveurs qui change à chaque bouchée.</p><h2>Commander vos macarons à Paris et en Île-de-France</h2><p>Assortiment à adapter à l'effectif et à l'occasion, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Macarons d\'exception',                    img: '/prod-macarons.webp',       prix: '24 pièces, 64,00 €', description: 'Macarons signés Pierre Morel, coques à la meringue italienne, sans conservateur.' },
  { id: 'brownie',
    seoTitle: `Brownie fondant pour vos goûters et pauses d'entreprise à Paris`,
    seoHtml: `<p>Un brownie fondant signé notre chef pâtissier, préparé au chocolat français. Il se sert à couper, une part généreuse par personne : réconfortant, facile à partager et suffisamment riche pour caler une fin d'après-midi de travail. La valeur sûre d'un goûter d'équipe.</p><h2>Commander votre brownie à Paris et en Île-de-France</h2><p>Format à ajuster selon le nombre de gourmands, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Brownie fondant maison',                     img: '/prod-brownie.webp', prix: '6 pièces, 19,90 €',        description: 'Brownie fondant signé notre chef pâtissier, au chocolat français.' },
  { id: 'carrot-cake',
    seoTitle: `Carrot cake pour vos pauses gourmandes d'entreprise à Paris`,
    seoHtml: `<p>Un carrot cake moelleux signé notre chef pâtissier, servi à couper, en tranches parfumées à la cannelle et aux fruits secs. Une part par personne. En pause d'après-midi, il change du chocolat et séduit ceux qui aiment les gâteaux un peu plus caractériels, et transforme une réunion en moment convivial.</p><h2>Commander votre carrot cake à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Carrot cake maison',           img: '/prod-carrot-cake.webp', prix: '5/6 pers, 13,90 €',    description: 'Carrot cake signé notre chef pâtissier, tranché sur plateau.' },
  { id: 'cake-citron',
    seoTitle: `Cake citron pavot pour vos pauses d'entreprise à Paris`,
    seoHtml: `<p>Un cake au citron et graines de pavot fait maison, servi tranché, une part par personne. Acidulé, moelleux et pas trop sucré, il accompagne parfaitement un café de milieu d'après-midi ou une réunion qui s'étire, et plaît à ceux qui fuient le trop-riche.</p><h2>Commander votre cake citron pavot à Paris et en Île-de-France</h2><p>Format à partager selon le nombre de convives, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Cake citron pavot maison',           img: '/prod-cake-citron-pavot.webp', prix: '5/6 pers, 13,90 €', description: 'Cake citron pavot fait maison, tranché sur plateau.' },
  { id: 'cake-marbre',
    seoTitle: `Cake marbré pour vos goûters et pauses d'entreprise à Paris`,
    seoHtml: `<p>Un cake marbré chocolat-vanille fait maison, servi tranché, une part par personne. Moelleux et sans chichi, c'est le goûter d'enfance qui met tout le monde d'accord et accompagne un café d'équipe sans jamais décevoir.</p><h2>Commander votre cake marbré à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Cake marbré maison',                 img: '/prod-cake-marbre.webp',    prix: '5/6 pers, 13,90 €', description: 'Cake marbré fait maison, tranché sur plateau.' },
  { id: 'cookie',
    seoTitle: `Cookie pour vos pauses et goûters d'entreprise à Paris`,
    seoHtml: `<p>Des cookies signés Laura Todd, extrêmement fins et très goûteux, un cookie par personne. Le format nomade par excellence : on l'attrape entre deux réunions, on le partage sans couvert, il ne fait pas de miettes de logistique. La douceur qui accompagne un café d'après-midi sans chichi.</p><h2>Commander vos cookies à Paris et en Île-de-France</h2><p>Quantité à ajuster selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Assortiments de cookies signature',            img: '/prod-cookies.webp',        prix: '6 pièces, 17,90 €', description: 'Cookies signés Laura Todd, extrêmement fins et goûteux. Caramel beurre salé, chocolat, pistache, chocolat blanc.' },
  { id: 'tartelette-citron',
    seoTitle: `Tartelette citron pour vos pauses et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Une tartelette au citron meringuée signée notre chef pâtissier, une par personne. Elle joue le contraste : un crémeux acidulé, une meringue légère, une pâte croustillante. En fin de déjeuner ou en pause d'après-midi, elle apporte une note fraîche qui réveille après un repas. Nette à servir debout.</p><h2>Commander vos tartelettes citron à Paris et en Île-de-France</h2><p>Quantité à adapter à l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Tartelette Citron',        img: '/prod-tartelette-citron.webp', prix: '6 pièces, 17,90 €', description: 'Tartelette au citron meringuée signée notre chef pâtissier, crémeux acidulé.' },
  { id: 'tartelette-praline',
    seoTitle: `Tartelette praliné pour vos pauses gourmandes d'entreprise à Paris`,
    seoHtml: `<p>Une tartelette au praliné signée notre chef pâtissier, une par personne. Elle mise sur le croustillant noisette et une ganache généreuse. Plus gourmande que la version citron, elle ravit les amateurs de chocolat et de fruits secs lors d'une pause d'après-midi ou d'une réception. Dressée avec soin.</p><h2>Commander vos tartelettes praliné à Paris et en Île-de-France</h2><p>Quantité selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Tartelette Praliné',      img: '/prod-tartelette-praline.webp', prix: '6 pièces, 17,90 €', description: 'Tartelette au praliné signée notre chef pâtissier, croustillant noisette.' },
  { id: 'mousse-chocolat',
    seoTitle: `Mousse au chocolat pour vos pauses et déjeuners d'entreprise à Paris`,
    seoHtml: `<p>Une mousse au chocolat signée notre chef pâtissier, faite maison avec un chocolat de qualité. Une verrine individuelle par personne, servie à la cuillère, sans découpe ni service compliqué. Texture aérienne et chocolat qui a du caractère : un dessert qui clôt un déjeuner d'équipe ou ponctue une pause gourmande avec élégance.</p><h2>Commander vos mousses au chocolat à Paris et en Île-de-France</h2><p>Nombre de verrines selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Véritable mousse au chocolat',           img: '/prod-mousse-chocolat.webp', prix: '6 pièces, 18,90 €', description: 'Mousse au chocolat signée notre chef pâtissier, faite maison, texture aérienne.' },
  { id: 'panna-cotta',
    seoTitle: `Panna cotta pour vos pauses et déjeuners d'entreprise à Paris`,
    seoHtml: `<p>Une panna cotta signée notre chef pâtissier, faite maison à la crème fleurette entière et aux fruits rouges frais. Une verrine individuelle par personne, prête à servir. Douce, crémeuse et légère, elle finit un déjeuner d'équipe sans lourdeur et se déguste à la cuillère, debout ou assis.</p><h2>Commander vos panna cottas à Paris et en Île-de-France</h2><p>Nombre de verrines selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Panna cotta maison',                 img: '/prod-panna-cotta.webp',    prix: '6 pièces, 16,90 €', description: 'Panna cotta signée notre chef pâtissier, crème fleurette entière et fruits rouges frais.' },
  { id: 'verrine-citron',
    seoTitle: `Verrine citron lemon curd pour vos pauses d'entreprise à Paris`,
    seoHtml: `<p>Une verrine au lemon curd signée notre chef pâtissier, une verrine individuelle par personne. Un crémeux citron vif qui mise sur la fraîcheur acidulée. En fin de repas ou en pause d'après-midi, elle réveille les papilles après un plat et se déguste sans couvert compliqué. Une note légère et vive.</p><h2>Commander vos verrines citron à Paris et en Île-de-France</h2><p>Nombre de verrines selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Verrine Lemon Curd', img: '/prod-verrine-citron.webp', prix: '6 pièces, 16,90 €', description: 'Verrine lemon curd signée notre chef pâtissier, fraîcheur acidulée.' },
  { id: 'choux',
    seoTitle: `Choux garnis pour vos pauses et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Nos choux garnis assortis jouent la variété : glaçages et crèmes aux parfums variés, à picorer du bout des doigts. En pause d'après-midi ou sur un buffet de réception, ils apportent du volume et de la couleur, et chacun trouve son parfum. Une pièce individuelle, festive et facile à partager.</p><h2>Commander vos choux à Paris et en Île-de-France</h2><p>Assortiment selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Assortiments de choux à la crème',                       img: '/prod-choux.webp', prix: '24 pièces, 64,00 €',          description: 'Choux garnis assortis, glaçages et crèmes aux parfums variés.' },
  { id: 'babka',
    seoTitle: `Babka au chocolat pour vos goûters et pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre babka briochée roulée au chocolat, servie tranchée, est la pièce généreuse qui change du gâteau classique. Moelleuse, marbrée de chocolat, elle se partage facilement autour d'un café de milieu d'après-midi. Un format convivial, préparé maison.</p><h2>Commander votre babka à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Brioche babka maison',                       img: '/prod-babka.webp', prix: '5/6 pers, 24,90 €',          description: 'Brioche roulée au chocolat, tranchée.' },
  { id: 'tartes-fines',
    seoTitle: `Tartes fines aux fruits pour vos pauses d'entreprise à Paris`,
    seoHtml: `<p>Nos tartes fines aux fruits de saison misent sur une pâte croustillante et des fruits à peine cuits, à partager. Plus légères qu'une pâtisserie crémeuse, elles apportent une note fruitée à une pause d'après-midi ou une fin de déjeuner. Composées selon la saison.</p><h2>Commander vos tartes fines à Paris et en Île-de-France</h2><p>Quantité selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Tartelettes fines signature',                img: '/prod-tartes-fines.webp', prix: '6 pièces, 24,90 €',   description: 'Tartelettes fines aux fruits de saison de saison, à partager.' },
  { id: 'yaourt-fruits',
    seoTitle: `Yaourt fermier aux fruits pour vos pauses et petits-déjeuners d'entreprise à Paris`,
    seoHtml: `<p>Nos yaourts sont ceux de la Ferme de Viltain, faits au lait de leurs vaches, avec des fruits. C'est l'option fraîche et légère d'une pause d'après-midi ou d'un petit-déjeuner d'équipe, pour ceux qui préfèrent le laitier au sucré. Servi en pot individuel, sourcé chez un producteur identifié.</p><h2>Commander vos yaourts à Paris et en Île-de-France</h2><p>Nombre de pots selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Yaourt Fermier',                img: '/prod-yaourt-fruits.webp', prix: '6 pièces, 14,90 €',  description: 'Yaourt aux fruits de la Ferme de Viltain, au lait de leurs vaches.' },
  { id: 'compote-pomme',
    seoTitle: `Compote de pomme pour vos pauses et petits-déjeuners d'entreprise à Paris`,
    seoHtml: `<p>Notre compote de pomme nature est sans sucres ajoutés, servie en pot individuel. C'est l'option la plus légère de la pause : fraîche, douce et facile à emporter entre deux réunions. Une alternative saine aux pâtisseries, qui plaît aussi bien le matin qu'en milieu d'après-midi.</p><h2>Commander vos compotes à Paris et en Île-de-France</h2><p>Nombre de pots selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Compote du verger',                img: '/prod-compote.webp',        prix: '6 pièces, 16,90 €', description: 'Compote de pomme nature, sans sucres ajoutés.' },
  { id: 'compote-pomme-fraise',
    seoTitle: `Compote pomme fraise pour vos pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre compote pomme et fraise ajoute une note fruitée et gourmande à la version nature, servie en pot individuel. Fraîche et légère, elle séduit ceux qui veulent une douceur sans culpabiliser, en pause d'après-midi comme au petit-déjeuner. Une option simple et saine à partager.</p><h2>Commander vos compotes pomme fraise à Paris et en Île-de-France</h2><p>Nombre de pots selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Compote Pomme Fraise',  img: '/prod-compote-fraise.webp', prix: '6 pièces, 16,90 €', description: 'Compote pomme et fraise, fraîche et gourmande.' },
  { id: 'compote-pomme-tonka',
    seoTitle: `Compote pomme fève tonka pour vos pauses d'entreprise à Paris`,
    seoHtml: `<p>Notre compote de pomme parfumée à la fève tonka joue une note un peu plus travaillée que la version nature : la douceur de la pomme, relevée d'un parfum vanillé et boisé. Servie en pot individuel, c'est la pause légère qui surprend agréablement, en milieu d'après-midi comme au petit-déjeuner.</p><h2>Commander vos compotes pomme tonka à Paris et en Île-de-France</h2><p>Nombre de pots selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Compote Pomme Fève Tonka', img: '/prod-compote-tonka.webp', prix: '6 pièces, 16,90 €', description: 'Compote pomme parfumée à la fève tonka.' },
  { id: 'verrine-salade-fruits',
    seoTitle: `Verrine de salade de fruits frais pour vos pauses et petits-déjeuners d'entreprise à Paris`,
    seoHtml: `<p>Notre verrine de salade de fruits frais coupés en cube est servie en pot individuel, prête à déguster à la cuillère. Fraîche, colorée et légère, elle apporte une option saine et vitaminée à une pause d'après-midi comme à un petit-déjeuner d'équipe.</p><h2>Commander vos verrines de salade de fruits à Paris et en Île-de-France</h2><p>Nombre de pots selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Verrine de Salade de Fruits', img: '/prod-verrine-salade-fruits.webp', prix: '6 pièces, 16,90 €', description: 'Salade de fruits frais coupés en cube, servie en pot individuel.' },
  { id: 'brochettes-fruits',
    seoTitle: `Brochettes de fruits frais pour vos pauses et événements d'entreprise à Paris`,
    seoHtml: `<p>Nos brochettes de fruits frais de saison sont pensées pour picorer : des morceaux colorés à attraper d'une main, sans couvert ni assiette. En pause d'après-midi, sur un buffet ou lors d'un événement, elles apportent la note fraîche et saine qui manque souvent aux goûters. Composées selon la saison.</p><h2>Commander vos brochettes de fruits à Paris et en Île-de-France</h2><p>Nombre de brochettes selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Brochettes de fruits frais',    img: '/prod-brochettes.webp',    prix: '20 brochettes, 48,90 €', description: 'Fruits frais de saison, fraises, ananas, melon, raisin, kiwi. Vegan et sans gluten.' },
  { id: 'corbeilles-fruits',
    seoTitle: `Corbeilles de fruits frais pour vos bureaux et pauses d'entreprise à Paris`,
    seoHtml: `<p>Nos corbeilles de fruits frais de saison sont l'option la plus simple pour garnir une salle de pause ou accueillir une réunion : des fruits entiers à partager, à disposition toute la journée. Une façon saine et sans effort de faire du bien aux équipes, renouvelée au fil des livraisons.</p><h2>Commander vos corbeilles de fruits à Paris et en Île-de-France</h2><p>Taille de la corbeille selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h. Idéal en formule régulière pour les bureaux.</p>`,
    nom: 'Corbeilles de Fruits',    img: '/prod-corbeille.webp',     prix: '10-12 fruits, 38,90 €', description: 'Corbeilles de fruits frais de saison, à partager.' },
  { id: 'plateau-fruits-frais',
    seoTitle: `Plateau de fruits frais découpés pour vos pauses et réceptions d'entreprise à Paris`,
    seoHtml: `<p>Notre plateau de fruits frais de saison, découpés et dressés, se pose au centre de la table pour se servir sans effort. Plus pratique que les fruits entiers pour un buffet ou une pause d'équipe, il apporte fraîcheur et couleur à une réception comme à un déjeuner. Composé selon la saison.</p><h2>Commander votre plateau de fruits à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis personnalisé sous 24h.</p>`,
    nom: 'Plateau de Fruits Frais', img: '/plateau-fruits.webp',   prix: '15-20 pers, 48,90 €', description: 'Sélection de fruits frais de saison découpés, à partager.' },
  { id: 'crepes',
    seoTitle: `Crêpes pour vos pauses et goûters d'entreprise à Paris`,
    seoHtml: `<p>Nos crêpes sucrées sont préparées le jour même, avec des garnitures au choix. En pause d'après-midi ou lors d'un événement, elles rappellent le goûter d'enfance et rassemblent l'équipe autour d'un moment simple et convivial. Un format généreux, à partager sans façon.</p><h2>Commander vos crêpes à Paris et en Île-de-France</h2><p>Quantité selon l'effectif, commande avant 14h la veille, livraison dès 6h30. Facturation entreprise avec TVA, devis sous 24h. Voir aussi notre atelier crêpes en version animation live.</p>`,
    nom: 'Crêpes moelleuses maison',                      img: '/prod-crepes-v2.webp',         prix: '20 crêpes, 58,90 €', description: 'Pâte traditionnelle reposée. Inclus : pots de confiture Alain Milliat et pâte à tartiner.' },
  // ─── Grands gâteaux à partager ────────────────────────────────────
  { id: 'tarte-framboise-grand-format',
    sectionTitle: 'Gâteaux à partager',
    section: 'gateaux-a-partager',
    seoTitle: `Grande tarte aux framboises, le gâteau à partager pour vos anniversaires d'entreprise à Paris`,
    seoHtml: `<p>Notre grande tarte aux framboises, pâte sablée et crémeux vanille, est pensée comme un vrai <strong>gâteau à partager</strong> : le format idéal pour un anniversaire d'entreprise, un pot de départ ou pour marquer un succès d'équipe. Dressée de framboises fraîches, elle se coupe en parts devant tout le monde, un vrai moment plutôt qu'une simple pâtisserie individuelle.</p><h2>Commander votre grand gâteau d'anniversaire à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Idéal pour un <strong>gâteau d'anniversaire en entreprise</strong>, un onboarding qui marque les esprits ou toute occasion à fêter en équipe. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Grande Tarte aux Framboises',   img: '/prod-tarte-framboise-partager.webp', prix: '10-12 pers, 64,90 €', description: 'Pâte sablée, crémeux vanille et framboises fraîches. Le grand gâteau à partager pour vos anniversaires et moments d\'équipe.' },
  { id: 'gateau-praline-noisette-partager',
    section: 'gateaux-a-partager',
    seoTitle: `Grand gâteau praliné noisette à partager, pour vos anniversaires et onboarding en entreprise à Paris`,
    seoHtml: `<p>Notre grand gâteau praliné noisette, dacquoise croustillante, praliné généreux et mousse légère, est conçu comme <strong>un gâteau à partager</strong> plutôt qu'une pâtisserie individuelle. Son format rectangulaire, taillé en parts, en fait le grand gâteau idéal pour souligner un anniversaire d'entreprise, un onboarding réussi ou toute étape à célébrer en équipe.</p><h2>Commander votre grand gâteau d'anniversaire à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Un <strong>gâteau d'anniversaire en entreprise</strong> gourmand et spectaculaire, pensé pour être découpé et partagé. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Grand Gâteau Praliné Noisette',  img: '/prod-gateau-praline-partager.webp', prix: '10-12 pers, 69,90 €', description: 'Dacquoise croustillante, praliné généreux et mousse légère. Le grand gâteau à partager pour vos célébrations d\'équipe.' },
  { id: 'fraisier-grand-format',
    section: 'gateaux-a-partager',
    seoTitle: `Fraisier à partager, le grand gâteau pour vos anniversaires d'entreprise à Paris`,
    seoHtml: `<p>Notre fraisier, biscuit léger, crème mousseline et fraises fraîches, est décliné en grand format pour devenir un vrai <strong>gâteau à partager</strong> en entreprise. C'est le classique gourmand qui fait toujours plaisir, taillé en parts pour un anniversaire, un pot de départ ou un moment convivial à célébrer en équipe.</p><h2>Commander votre grand gâteau d'anniversaire à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Le <strong>gâteau d'anniversaire en entreprise</strong> qui fait l'unanimité, pour un onboarding, une fête d'équipe ou toute occasion à marquer. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Fraisier à Partager',           img: '/prod-fraisier-partager.webp', prix: '6/8 pers, 64,90 €', description: 'Biscuit léger, crème mousseline et fraises fraîches. Le grand gâteau à partager pour vos anniversaires d\'équipe.' },
  { id: 'tarte-citron-meringuee-grande',
    section: 'gateaux-a-partager',
    seoTitle: `Grande tarte au citron meringuée, le gâteau à partager pour vos anniversaires d'entreprise à Paris`,
    seoHtml: `<p>Notre grande tarte au citron meringuée, crémeux citron vif et meringue dorée à la torche, est pensée en <strong>grand format à partager</strong>. Son caractère acidulé change du sucré classique et surprend agréablement lors d'un anniversaire d'entreprise, d'un onboarding ou d'un moment à fêter en équipe.</p><h2>Commander votre grand gâteau d'anniversaire à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Un <strong>gâteau d'anniversaire en entreprise</strong> qui tranche avec l'ordinaire, à découper et partager en équipe. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Grande Tarte au Citron Meringuée', img: '/prod-tarte-citron-partager.webp', prix: '10-12 pers, 59,90 €', description: 'Crémeux citron vif et meringue dorée à la torche. Le grand gâteau à partager pour vos célébrations d\'équipe.' },
  { id: 'gateau-roule-fraise-partager',
    section: 'gateaux-a-partager',
    seoTitle: `Gâteau roulé fraise vanille, le gâteau à partager pour vos goûters d'anniversaire en entreprise à Paris`,
    seoHtml: `<p>Notre gâteau roulé fraise et vanille, biscuit moelleux, crème légère et fraises fraîches, offre un format original de <strong>gâteau à partager</strong>. Plus léger qu'un gâteau à étages, il se tranche facilement et convient parfaitement à un goûter d'anniversaire d'entreprise ou à un moment de convivialité entre collègues.</p><h2>Commander votre gâteau d'anniversaire à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Un <strong>gâteau d'anniversaire en entreprise</strong> simple et gourmand, idéal pour un onboarding ou une fête d'équipe. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Gâteau Roulé Fraise & Vanille',  img: '/prod-buche-fraise-partager.webp', prix: '8-10 pers, 54,90 €', description: 'Biscuit moelleux, crème légère et fraises fraîches, roulé. Le gâteau à partager pour vos goûters d\'anniversaire d\'équipe.' },
  { id: 'panettone-artisanal-partager',
    section: 'gateaux-a-partager',
    seoTitle: `Panettone artisanal, le grand gâteau à partager pour vos petits-déjeuners et fêtes d'entreprise à Paris`,
    seoHtml: `<p>Notre panettone artisanal, brioche italienne moelleuse aux fruits confits et raisins, cuite dans son moule doré traditionnel, est un <strong>grand gâteau à partager</strong> par excellence. Généreux et parfumé, il trouve sa place sur un petit-déjeuner festif, un goûter de fin d'année ou tout moment à célébrer en équipe, tranché devant tout le monde.</p><h2>Commander votre panettone à Paris et en Île-de-France</h2><p>Format à partager selon l'effectif, commande avant 14h la veille, livraison dès 6h30 dans vos bureaux. Un <strong>gâteau à partager</strong> idéal pour un anniversaire d'entreprise, un onboarding ou les fêtes de fin d'année. Facturation entreprise avec TVA, devis sous 24h.</p>`,
    nom: 'Panettone Artisanal',           img: '/prod-panettone-partager.webp', prix: '10-12 pers, 44,90 €', description: 'Brioche italienne moelleuse aux fruits confits et raisins. Le grand gâteau à partager pour vos petits-déjeuners et fêtes d\'équipe.' },
]

/* ─── Carte douceur ──────────────────────────────────────────────── */

function PauseCard({ produit }) {
  const [hovered, setHovered] = useState(false)
  const href = produit.id === 'madeleines'
    ? '/creations/petits-dejeuners-et-pauses/madeleines-20'
    : `/creations/pauses-gourmandes/${produit.id}`
  return (
    <Link
      href={href}
      className="pg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        display: 'flex', flexDirection: 'column',
        background: '#FFFFFF',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 2px 6px rgba(17,17,17,0.04), 0 16px 40px rgba(17,17,17,0.09)'
          : '0 1px 3px rgba(17,17,17,0.04), 0 6px 20px rgba(17,17,17,0.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.35s ease, transform 0.35s ease',
      }}
    >
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#F8F5EF', overflow: 'hidden' }}>
        <Image fill src={produit.img}
          alt={produit.nom}
          sizes="(max-width: 900px) 50vw, 33vw"
          style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.7s ease', transform: hovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20,16,12,0.30)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}>
          <span style={{
            fontFamily: "'Neue Montreal', sans-serif",
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.7)', padding: '10px 24px',
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transition: 'transform 0.4s ease',
          }}>
            Découvrir
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '16px 16px 16px' }}>
        <h3 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.2, color: hovered ? '#E0A126' : '#111111', marginBottom: '8px', transition: 'color 0.25s ease', flex: 1 }}>
          {produit.nom}
        </h3>
        {(() => {
          if (!produit.prix) return (
            <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '12px', color: '#9B9590' }}>À partager · sur devis</p>
          )
          const parts = produit.prix.split(', ')
          const hasUnit = parts.length === 2
          return (
            <>
              <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '13px', color: '#111111' }}>
                {hasUnit ? parts[1] : parts[0]}
                <span style={{ color: 'rgba(17,17,17,0.28)', fontSize: '11px', marginLeft: '4px' }}>HT</span>
              </p>
              {hasUnit && (
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', color: 'rgba(17,17,17,0.4)', marginTop: '4px' }}>{parts[0]}</p>
              )}
            </>
          )
        })()}
      </div>
    </Link>
  )
}

/* ─── Page ───────────────────────────────────────────────────────── */

const GATEAUX_LABEL = 'Gâteaux à partager'
const SORTS = [...DEFAULT_SORTS, GATEAUX_LABEL]

export default function PausesGourmandes() {
  const [sortLabel, setSortLabel] = useState('En vedette')
  const pausesAffichees = sortLabel === GATEAUX_LABEL
    ? PAUSES.filter(p => p.section === 'gateaux-a-partager')
    : sortItems(PAUSES, sortLabel, p => priceFromLabel(p.prix))
  return (
    <>
      <Navbar showBanner={true} />

      <main style={{ background: '#FDFCFA', minHeight: '100vh', paddingTop: 'calc(var(--banner-h) + var(--nav-h))' }}>

        {/* ── Hero ── */}
        <div className="pg-hero-wrapper" style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px 72px 0' }}>
          <header className="pg-hero" style={{ position: 'relative', width: '100%', height: '54vh', minHeight: '420px', overflow: 'hidden' }}>
            <ParallaxImage priority sizes="100vw" src={HERO.hero} alt="Pauses gourmandes L'Écrin" strength={0.05} style={{ position: 'absolute', inset: 0 }} imgStyle={{ objectPosition: 'center' }} />
            <div className="cat-hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 80%)' }} />
            <Reveal mode="mount" y={16}>
              <div className="pg-hero-text" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 72px', maxWidth: '640px' }}>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '11px', fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '16px' }}>
                  Petit-déjeuner & Pauses
                </p>
                <h1 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: 'clamp(30px, 3.6vw, 54px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.01em', color: '#FFFFFF', marginBottom: '20px' }}>
                  {HERO.label}
                </h1>
                <p style={{ fontFamily: "'Neue Montreal', sans-serif", fontSize: '14px', lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', maxWidth: '420px' }}>
                  {HERO.description}
                </p>
              </div>
            </Reveal>
          </header>
        </div>

        <Breadcrumb maxWidth="1440px" items={[{ label: 'Accueil', href: '/' }, { label: 'Pauses Gourmandes' }]} />

        <CategoryTabs sort={sortLabel} onSort={setSortLabel} count={pausesAffichees.length} sorts={SORTS} />

        {/* ── Grille des douceurs ── */}
        <div className="pg-shell pg-grid" style={{ maxWidth: '1440px', margin: '0 auto', padding: '48px 72px 104px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px 24px' }}>
          {pausesAffichees.map((p, i) => (
            <Fragment key={p.id}>
              {p.sectionTitle && (
                <div style={{ gridColumn: '1 / -1', marginBottom: '0', paddingTop: '16px', paddingBottom: '8px' }}>
                  <h2 style={{ fontFamily: "'Baskerville Display PT', Georgia, serif", fontSize: '24px', fontWeight: 400, letterSpacing: '-0.01em', color: '#1a1a1a', margin: 0 }}>
                    {p.sectionTitle}
                  </h2>
                </div>
              )}
              <Reveal delay={(i % 4) * 90}>
                <PauseCard produit={p} />
              </Reveal>
            </Fragment>
          ))}
        </div>

      </main>

      <CategoryClosing
        eyebrow="Pensé pour les pauses d'équipe"
        title={'La pause qui remotive.\nLe goût qui rassemble.'}
        body="Une pause réussie change le rythme d'une journée de travail. Madeleines, cookies, fruits frais : des douceurs artisanales livrées prêtes à servir, pour transformer un quart d'heure de battement en vrai moment d'équipe."
        seoArticle={SEO_ARTICLE}
      />

      <style suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `
        .pg-hero { border-radius: 2px !important; }
        .pg-card { border-radius: 4px !important; }
        @media (max-width: 1100px) {
          .pg-hero-wrapper { padding-left: 48px !important; padding-right: 48px !important; }
          .pg-hero-text    { padding-left: 48px !important; padding-right: 48px !important; }
          .pg-shell { padding-left: 48px !important; padding-right: 48px !important; }
          .pg-grid  { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 768px) {
          .cat-hero-overlay { background: linear-gradient(to right, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.5) 100%) !important; }
          .pg-hero-wrapper { padding: 20px 20px 0 !important; }
          .pg-hero         { min-height: 360px !important; height: 40vh !important; }
          .pg-hero-text    { padding: 0 28px !important; max-width: 100% !important; }
          .pg-shell { padding-left: 24px !important; padding-right: 24px !important; }
          .pg-grid  { grid-template-columns: repeat(2,1fr) !important; gap: 20px 14px !important; }
        }
      ` }} />

      <CategoryJsonLd
        name="Pauses gourmandes"
        path="/creations/pauses-gourmandes"
        items={PAUSES.map(p => ({ name: p.nom, url: `/creations/pauses-gourmandes/${p.id}` }))}
      />
      <Footer />
    </>
  )
}
