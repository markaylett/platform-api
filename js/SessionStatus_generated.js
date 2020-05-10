// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var reactivemarkets = reactivemarkets || {};

/**
 * @const
 * @namespace
 */
reactivemarkets.papi = reactivemarkets.papi || {};

/**
 * @constructor
 */
reactivemarkets.papi.SessionStatus = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {reactivemarkets.papi.SessionStatus}
 */
reactivemarkets.papi.SessionStatus.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {reactivemarkets.papi.SessionStatus=} obj
 * @returns {reactivemarkets.papi.SessionStatus}
 */
reactivemarkets.papi.SessionStatus.getRootAsSessionStatus = function(bb, obj) {
  return (obj || new reactivemarkets.papi.SessionStatus).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {reactivemarkets.papi.SessionStatus=} obj
 * @returns {reactivemarkets.papi.SessionStatus}
 */
reactivemarkets.papi.SessionStatus.getSizePrefixedRootAsSessionStatus = function(bb, obj) {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new reactivemarkets.papi.SessionStatus).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
reactivemarkets.papi.SessionStatus.prototype.sourceTs = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readInt64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
reactivemarkets.papi.SessionStatus.prototype.source = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
reactivemarkets.papi.SessionStatus.prototype.code = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
reactivemarkets.papi.SessionStatus.prototype.message = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
reactivemarkets.papi.SessionStatus.startSessionStatus = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} sourceTs
 */
reactivemarkets.papi.SessionStatus.addSourceTs = function(builder, sourceTs) {
  builder.addFieldInt64(0, sourceTs, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sourceOffset
 */
reactivemarkets.papi.SessionStatus.addSource = function(builder, sourceOffset) {
  builder.addFieldOffset(1, sourceOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} code
 */
reactivemarkets.papi.SessionStatus.addCode = function(builder, code) {
  builder.addFieldInt32(2, code, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
reactivemarkets.papi.SessionStatus.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(3, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
reactivemarkets.papi.SessionStatus.endSessionStatus = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} sourceTs
 * @param {flatbuffers.Offset} sourceOffset
 * @param {number} code
 * @param {flatbuffers.Offset} messageOffset
 * @returns {flatbuffers.Offset}
 */
reactivemarkets.papi.SessionStatus.createSessionStatus = function(builder, sourceTs, sourceOffset, code, messageOffset) {
  reactivemarkets.papi.SessionStatus.startSessionStatus(builder);
  reactivemarkets.papi.SessionStatus.addSourceTs(builder, sourceTs);
  reactivemarkets.papi.SessionStatus.addSource(builder, sourceOffset);
  reactivemarkets.papi.SessionStatus.addCode(builder, code);
  reactivemarkets.papi.SessionStatus.addMessage(builder, messageOffset);
  return reactivemarkets.papi.SessionStatus.endSessionStatus(builder);
}

// Exports for Node.js and RequireJS
this.reactivemarkets = reactivemarkets;
