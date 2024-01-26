import {readFile, writeFile} from 'node:fs/promises';
import {getDate } from "./divers.js";
import {createHash} from 'node:crypto'
import uuidv4 from 'uuidv4';

/* Chemin de stockage des blocks */
const path = 'src/data/blockchain.json'

/**
 * Mes définitions
 * @typedef { id: string, nom: string, don: number, date: string,hash: string} Block
 * @property {string} id
 * @property {string} nom
 * @property {number} don
 * @property {string} date
 * @property {string} string
 *
 */

/**
 * Renvoie un tableau json de tous les blocks
 * @return {Promise<any>}
 */
export async function findBlocks() {
    return await readFile(path, {encoding: 'utf8'});
}


/**
 * Trouve un block à partir de son id
 * @param partialBlock
 * @return {Promise<Block[]>}
 */
export async function findBlock(partialBlock) {
    let blocks = await findBlocks();
    if (blocks.length === 0) {
        return null;
    }
    blocks = JSON.parse(blocks);
    return blocks.find(block => block.id === partialBlock.id);
}

/**
 * Trouve le dernier block de la chaine
 * @return {Promise<Block|null>}
 */
export async function findLastBlock() {
    let blocks = await findBlocks();
    if (blocks.length === 0) {
        return null;
    }
    blocks = JSON.parse(blocks);
    return blocks[blocks.length - 1];
}

function generateSHA256(input) {
    const hash = createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
}



/**
 * Creation d'un block depuis le contenu json
 * @param contenu
 * @return {Promise<Block[]>}
 */
export async function createBlock(contenu) {
    let lastBlock = await findLastBlock();
    let lastBlockHash = await lastBlock ? generateSHA256(JSON.stringify(lastBlock)) : '';
    let result;
    result = "{ \"id\" : \"" + uuidv4.uuid() + "\", " +
        "\"nom\" : \"" +  contenu.nom + "\", " +
        "\"don\" : \"" + contenu.don + "\", " +
        "\"date\" : \"" + getDate() + "\", " +
        "\"hash\" : \"" + lastBlockHash + "\", " +
        "\"chaine\" : " + "\"END\" }";
    let block = JSON.parse(result);

    let existingContent = await readFile(path, {encoding: 'utf8'});
    let blocks = existingContent ? JSON.parse(existingContent) : [];

    blocks.push(block);

    await writeFile(path, JSON.stringify(blocks, null, 2));

    return block;
}
