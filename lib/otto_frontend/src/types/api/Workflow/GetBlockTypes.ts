export interface BlockDetail {
  core_block_type: string;
  process_type: string;
  ui_block_type: string;
  source_path: string;
  reference_core_block_type: string;
}

export interface GetBlockTypesResponse {
  [parentKey: string]: {
    [childKey: string]: BlockDetail;
  };
}
