// Test if a new solution can be added for contract - SolnSquareVerifier
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

let SquareVerifier = artifacts.require('SquareVerifier');
let SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

let proofSet = require('../../zokrates/code/square/proof');

contract ('TestSolnSquareVerifier', accounts => {
    const account_one = accounts[0];
    const account_two = accounts[1];

    beforeEach(async function() {
        const _SquareVerifire = await SquareVerifier.new({from: account_one});
        this.contract = await SolnSquareVerifier.new(_SquareVerifire.address, {from: account_one});
    })

    it ('can mint new token', async function(){
        let isMinted = true;
        try {
            await this.contract.mintToken(account_two, 2, proofSet.proof.A, proofSet.proof.A_p,
                proofSet.proof.B, proofSet.proof.B_p, proofSet.proof.C, proofSet.proof.C_p,
                proofSet.proof.H, proofSet.proof.K, proofSet.input, {from: account_one});
        } catch (e) {
            isMinted = false;
        }

        assert.equal(isMinted, true, "Token not minted.");
    })

    it ('cannot mint new token if input is invalid', async function() {
        let isMinted = true;
        input = [3,1];
        try {
            await this.contract.mintToken(account_two, 2, proofSet.proof.A, proofSet.proof.A_p,
                proofSet.proof.B, proofSet.proof.B_p, proofSet.proof.C, proofSet.proof.C_p,
                proofSet.proof.H, proofSet.proof.K, input, {from: account_one});
        } catch (e) {
            isMinted = false;
        }

        assert.equal(isMinted, false, "Token not minted.");
    })

    it ("can verify token", async function(){
        let isVerified = true;
        try {
            await this.contract.VerifyToken(account_two, 2, proofSet.proof.A, proofSet.proof.A_p,
                proofSet.proof.B, proofSet.proof.B_p, proofSet.proof.C, proofSet.proof.C_p,
                proofSet.proof.H, proofSet.proof.K, proofSet.input, {from: account_one});
        } catch (e) {
            isVerified = false;
            console.log(e);
        }

        assert.equal(isVerified, true, "Token not verified.");
    })

    it ("can not verify token if input is invalid", async function(){
        let isVerified = true;
        input = [3,1];
        try {
            await this.contract.VerifyToken(account_two, 2, proofSet.proof.A, proofSet.proof.A_p,
                proofSet.proof.B, proofSet.proof.B_p, proofSet.proof.C, proofSet.proof.C_p,
                proofSet.proof.H, proofSet.proof.K, input, {from: account_one});
        } catch (e) {
            isVerified = false;
        }

        assert.equal(isVerified, false, "Token verified when input invalid.");
    })

})